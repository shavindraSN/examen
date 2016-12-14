import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    constructor(private _http: Http, private _router: Router) { }

    /**
     * Use to authenticate user. Calls authenticate url and that backend route 
     * authenticate user for given username and password
     */

    Login(email: string, password: string) {
        let url = '/api/login';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = {
            email: email,
            password: password
        }

        return this._http.post(url, body, options)
        .toPromise()
        .then(data => {
            let key = '';
            
            if(this.isJson(data._body)) {
                this._router.navigateByUrl('/home');
            } else {
                return false;
                
            }
        })
        .catch(this.handleError)
    }

    /**
     * Logout from the session. This will remove sessions stored
     */
    logout(): void {
        localStorage.removeItem("id_token");
    }

    handleError(error: any): Promise<any> {
        console.error('An Error occurred ', error);
        return Promise.reject(error.message || error);
    }

    isJson(str: string): boolean {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
}