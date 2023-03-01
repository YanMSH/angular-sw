import {Injectable} from '@angular/core';
import {Planet} from "../../models/Planet";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, EMPTY, forkJoin, Observable, Subject} from "rxjs";
import {baseURL} from "../../server/baseURL";
import {Endpoints} from "../../server/Endpoints";
import {People} from "../../models/People";
import {ServerResponse} from "../../models/ServerResponse";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
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

  getPlanets(page = 1): Observable<ServerResponse<Planet>> {
    return this.httpClient.get<ServerResponse<Planet>>(baseURL + Endpoints.planets, {
      params: new HttpParams({fromObject: {page}})
    })
      .pipe(
        catchError(() => EMPTY),
      )
  }

  getPlanetInfo(planetName: string) {
    return this.httpClient.get<ServerResponse<Planet>>(baseURL + Endpoints.planets,
      {
        params: new HttpParams({
          fromObject: {
            search: planetName
          }
        })
      })
      .pipe(
        catchError(() => EMPTY)
      )
  }


}
