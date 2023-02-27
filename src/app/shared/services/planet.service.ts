import {Injectable} from '@angular/core';
import {Planet} from "../../models/Planet";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, catchError, EMPTY, forkJoin, Observable, Subject, tap} from "rxjs";
import {baseURL} from "../../server/baseURL";
import {Endpoints} from "../../server/Endpoints";
import {People} from "../../models/People";
import {ServerResponse} from "../../models/ServerResponse";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets: Planet[] = [];
  planetInfo: Planet;
  isFirstPage = false;
  isLastPage = false;
  page$ = new BehaviorSubject(1);
  currentPlanet$ = new Subject<Planet>();
  currentResidents$ = new Subject<People[]>();

  constructor(
    private httpClient: HttpClient
  ) {
    this.currentPlanet$.subscribe(v => {
      if (v.residents.length > 0) {
        forkJoin(v.residents.map(url => this.httpClient.get<People>(url))).subscribe(v => {
          this.currentResidents$.next(v);
        })
      } else {
        this.currentResidents$.next([]);
      }
    })
  }

  getPlanets(page = 1): Observable<ServerResponse> {
    this.isFirstPage = false;
    this.isLastPage = false;
    return this.httpClient.get<ServerResponse>(baseURL + Endpoints.planets, {
      params: new HttpParams({fromObject: {page}})
    })
      .pipe(
        catchError(() => EMPTY),
        tap(response => {
          const pagesAmount = response.count / response.results.length;
          this.planets = response.results as Planet[];
          if (page === 1) {
            this.isFirstPage = true
          }
          if (page === pagesAmount) {
            this.isLastPage = true
          }
        })
      )
  }

  getPlanetInfo(planetName: string) {
    return this.httpClient.get<ServerResponse>(baseURL + Endpoints.planets,
      {
        params: new HttpParams({
          fromObject: {
            search: planetName
          }
        })
      })
      .pipe(
        catchError(() => EMPTY),
        tap((response) => {
          this.planetInfo = response.results[0] as Planet;
        })
      )
  }


}
