import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VerifyEmailService {
    constructor(
        private _http: Http,
        private _router: Router
    ) { }

    verifyEmail(userId: number, verificationCode: number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = 'users/verify_user';
        let body = {
            user_id: userId,
            verification_code: verificationCode
        }
        return this._http.post(url, body, options)
        .toPromise()
        .then(response => {
            return response;
        })
        .catch(()=>{
            console.log('error caught by verifyEmail');
        });
    }
}