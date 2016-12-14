import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    constructor(private _http: Http, private _router: Router) { }

    /**
     * Check for a session in the local Storage
     * 
     * @return {Boolean} session - If there is a session return true else
     *                             return false
     */
    private validateSession():boolean {
        if(localStorage.getItem('session')) {
            let session = localStorage.getItem('session');
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Check Credentials that is stored inside localStorage
     * if valid session is there returns true otherwise 
     * users are navigate login page
     */
    checkCredentials() {
        if(localStorage.getItem('auth') && this.validateSession()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
        }
    }

    checkLoginCredentials() {
        if(localStorage.getItem('auth') && this.validateSession()) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Get session from the server and store in the Browser local storage
     * 
     * @param {callback} done - Actions to be done after getting credentials
     */
    getCredentials(done) {
        let url = '/api/session';

        this._http.get(url)
        .toPromise()
        .then(response => {
            localStorage.setItem('auth', response.json().token);
            localStorage.setItem('session', new Date().getTime().toString());
            done();
        })
        .catch(() => {
            this._router.navigateByUrl('/login');
        })
    }

    /**
     * Get user details for the current user that is saved in `Passport` session
     */
    getUserDetails() {
        let url = '/api/session';

        return this._http.get(url)
            .toPromise()
            .then(response => {
                return response.json();
            })
    }

    /**
     * Handle error caught in Http requests
     */
    private handleError(error: any): Promise<any> {
        
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    logout() {
        let url = '/api/logout';
        this._http.delete(url)
        .toPromise()
        .then(response => {
            console.log(response);
        })
        .catch(() => {
            console.log('logout error');
        })
        localStorage.removeItem('auth');
        localStorage.removeItem('session');
        this._router.navigate(['/login']);
    }
}