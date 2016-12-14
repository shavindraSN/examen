import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from './login.service';
import { AuthService } from '../../service/auth.service'

@Component({
    selector: 'login',
    templateUrl: 'client/components/login/login.component.html',
    styleUrls: ['client/customCss/login-style.css'],
    providers: [LoginService, AuthService]
})
/**
 * Login component is to display login screen and relevent method 
 * to act as authentication interface
 */
export class LoginComponent implements AfterViewInit, OnInit {
    loginStatus: boolean = true;
    authenticate: boolean = false;
    user;
    constructor(
        private loginService: LoginService,
        private _authService: AuthService,
        private _router: Router
    ) { }

    getUser() {
        this._authService.getUserDetails()
            .then(data => {
                console.log(data);
            })
        console.log(localStorage.getItem('auth'))
    }

    ngOnInit() {
        if (localStorage.getItem('auth')) {
            this._authService.getUserDetails()
                .then(data => {
                    if(data.token) {
                        this.authenticate = true;
                        this._router.navigate(['/home']);
                    }
                })
        }
        else {
            this.authenticate = true;
            this._router.navigate(['/login']);
        }
    }

    ngAfterViewInit() {
        $.material.init()
    }

    /**
     * Actions to take when submitting a form
     */
    onSubmit(form) {
        let email: string = form.value.inputEmail;
        let pwd: string = form.value.inputPassword;
        this.login(email, pwd);
    }

    /**
     * Call login back-end route
     */
    login(username, password) {
        this.loginService.Login(username, password)
            .then((data) => {
                if (!data) {
                    this.loginStatus = false;
                }
                else {
                    this.loginStatus = true
                }
            });
    }
    validLogin() {
        return this.loginStatus;
    }
}