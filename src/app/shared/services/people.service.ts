import {Injectable} from '@angular/core';
import {People} from "../../models/People";
import {BehaviorSubject, catchError, EMPTY, Subject, tap} from "rxjs";
import {baseURL} from "../../server/baseURL";
import {Endpoints} from "../../server/Endpoints";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ServerResponse} from "../../models/ServerResponse";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people: People[];
  peopleInfo: People;
  isFirstPage: boolean;
  isLastPage: boolean;
  page$ = new BehaviorSubject(1);
  currentPeople$ = new Subject<People>();

  constructor(private httpClient: HttpClient) {
  }

  getPeople(page = 1) {
    this.isFirstPage = false;
    this.isLastPage = false;
    return this.httpClient.get<ServerResponse>(baseURL + Endpoints.people, {
      params: new HttpParams({fromObject: {page}})
    })
      .pipe(
        catchError(() => EMPTY),
        tap(response => {
          const pagesAmount = response.count / response.results.length;
          this.people = response.results as People[];
          if (page === 1) {
            this.isFirstPage = true
          }
          if (page === pagesAmount) {
            this.isLastPage = true
          }
        })
      )
  }

  getPeopleInfo(peopleName: string) {
    return this.httpClient.get<ServerResponse>(baseURL + Endpoints.people,
      {
        params: new HttpParams({
          fromObject: {
            search: peopleName
          }
        })
      })
      .pipe(
        catchError(() => EMPTY),
        tap((response) => {
          this.peopleInfo = response.results[0] as People;
        })
      )
  }
}
