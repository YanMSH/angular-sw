import {Injectable} from '@angular/core';
import {People} from "../../models/People";
import {catchError, EMPTY} from "rxjs";
import {baseURL} from "../../server/baseURL";
import {Endpoints} from "../../server/Endpoints";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ServerResponse} from "../../models/ServerResponse";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private httpClient: HttpClient) {
  }

  getPeople(page = 1) {

    return this.httpClient.get<ServerResponse<People>>(baseURL + Endpoints.people, {
      params: new HttpParams({fromObject: {page}})
    })
      .pipe(
        catchError(() => EMPTY)
      )
  }

  getPeopleInfo(peopleName: string) {
    return this.httpClient.get<ServerResponse<People>>(baseURL + Endpoints.people,
      {
        params: new HttpParams({
          fromObject: {
            search: peopleName
          }
        })
      })
      .pipe(
        catchError(() => EMPTY)
      )
  }
}
