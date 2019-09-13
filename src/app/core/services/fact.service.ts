import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})

export class FactService {
    constructor(
        private apiService: ApiService
    ) { }

    public getFacts(): Observable<any> {

        return this.apiService
            .get('/facts?query=maior empresa')
            .map((data) => {
                return data;
            });
    }
}
