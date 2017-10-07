import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HistoryService {    
    constructor(
        private _http: Http
    ) {}

    /**
     * Retrieve user history through API
     */
    fetchHistory(userID) {
        let url = 'users/get_history/' + userID;

        return this._http.get(url)
        .toPromise()
        .then(data => data.json())
        .catch(error => {
            console.log(error);
        })
    }
}