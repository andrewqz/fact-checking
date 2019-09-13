import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import * as moment from 'moment-timezone';

@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient
    ) { }

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    public getDate() {
        const timezone = moment.tz('America/Sao_Paulo');
        return timezone.locale('pt-br');
    }

    get(path: string): Observable<any> {

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.get('http://localhost:4200/assets/data/facts.json', { headers })
            .pipe(catchError(this.formatErrors));
    }

    patch(path: string, body: any = {}): Observable<any> {
        return this.http.patch(
            `${environment.api_url}${path}`,
            JSON.stringify(body)
        ).pipe(catchError(this.formatErrors));
    }

    put(path: string, body: any = {}): Observable<any> {
        return this.http.put(
            `${environment.api_url}${path}`,
            JSON.stringify(body)
        ).pipe(catchError(this.formatErrors));
    }

    post(path: string, body: any = {}): Observable<any> {
        return this.http.post(
            `${environment.api_url}${path}`,
            JSON.stringify(body)
        ).pipe(catchError(this.formatErrors));
    }

    delete(path: string): Observable<any> {
        return this.http.delete(
            `${environment.api_url}${path}`
        ).pipe(catchError(this.formatErrors));
    }

}
