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
        console.log('login service triggered');
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
            if(data) {
                console.log('success case-- ', data);
            } else {
                console.log('wrong case-- ', data);
                //this._router.navigateByUrl('/login')
            }
        })
        .catch(this.handleError)
    }

    login1(username: string, password: string) {
        let url = 'api/login1';

        console.log('login1 is clicked');
        
        this._http.post(url, JSON.stringify({ password: password }), new RequestOptions({
            headers: new Headers({"Content-Type": "application/json"})
        }))
            .map((res: Response) => res.json())
            .subscribe(
                (res:Response & {jwt: string }) => {
                    localStorage.setItem("id_token", res.jwt);
                },
                (error: Error) => {console.log('Error occurred on login', error); }
            );
    }


    logout(): void {
        localStorage.removeItem("id_token");
    }

    
    handleError(error: any): Promise<any> {
        console.error('An Error occurred ', error);
        return Promise.reject(error.message || error);
    }
}