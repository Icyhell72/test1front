import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Test1 } from '../models/test1';

@Injectable({
  providedIn: 'root'
})
export class Test1Service {
  private apiUrl = 'http://localhost:8080/api/test1/alltests';

  constructor(private http: HttpClient) { }

  getAllTest1(): Observable<Test1[]> {
    return this.http.get<Test1[]>(this.apiUrl).pipe(
      catchError((error: any) => {
        
        console.error('Error fetching test1 data:', error);
        return throwError(error);
      })
    );
  }
}
