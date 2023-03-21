import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Candidature } from '../models/candidature.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  baseUri: string = 'http://localhost:3000/api/candidatures';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  add(data: Candidature): Observable<any> {
    return this.http.post(this.baseUri, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  getAllData(){
    return this.http.get(`${this.baseUri}`);
  }

  getSingleData(id: any): Observable<any>{
    let url = `${this.baseUri}/${id}`;
    return this.http.get(url, {headers: this.httpHeaders})
    .pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }


  update(id:any, data:any): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.http.put(url, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  delete(id:any): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.http.delete(url, { headers: this.httpHeaders }).pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}