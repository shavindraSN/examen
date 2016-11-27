import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { District, districtList } from './districts';
import { UserType, User } from '../../sharedClasses/user'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistrationService {
    constructor(private _http: Http) { }

    /**
     * Get User types from the API
     */
    getUserTypes(): Promise<UserType[]> {
        let url = 'users/getUserTypes';
        return this._http.get(url)
            .toPromise()
            .then(response => response.json().user_type as UserType[])
            .catch(this.handleError);
    }

    registerUser(user: User): Promise<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = '/users/register';
        return this._http.post(url, user, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
}