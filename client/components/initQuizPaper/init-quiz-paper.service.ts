import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Subject } from '../../sharedClasses/subject'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InitQuizPaperService {
    private api_url = 'subjects/getAvailableSubjects';
    constructor(private _http: Http) { }

    getSubjects(): Promise<Subject[]> {
        return this._http.get(this.api_url)
            .toPromise()
            .then(response => response.json().subjects as Subject[])
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}