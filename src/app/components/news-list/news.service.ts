import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

import { API_URL } from '../../../config/env';
import { NewsModel } from './news.model';

@Injectable()
export class NewsService {

    urlNewsList = API_URL + `/search`;
    constructor(private _http: HttpClient){}

    getNewsList(page: number, tags:string): Observable<NewsModel>{
        let params = new HttpParams();
        params = params.append('page', page.toString());
        params = params.append('tags', tags);

        return this._http.get<NewsModel>(this.urlNewsList, {params}).pipe(catchError(this.handleError))
    }


    handleError(error: HttpErrorResponse) {
       
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error("An error occurred:", error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
              `body was: ${error.error.message}`
          );
        }
        // return an throwError with a user-facing error message
        return throwError(
          error.error.message
            ? error.error.message
            : "Something bad happened; please try again later."
        );
      }

}