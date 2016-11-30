import { Component, AfterViewInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: 'client/components/login/login.component.html',
    styleUrls: ['client/customCss/login-style.css'],
    providers: [LoginService]
})
/**
 * Login component is to display login screen and relevent method 
 * to act as authentication interface
 */
export class LoginComponent implements AfterViewInit{

    constructor(private loginService: LoginService) { }
    ngAfterViewInit() {
        $.material.init()
    }

    /**
     * Actions to take when submitting a form
     */
    onSubmit(form) {
        let email:string = form.value.inputEmail;
        let pwd:string = form.value.inputPassword;
        this.login(email, pwd);
    }

    /**
     * Call login back-end route
     */
    login(username, password) {
        this.loginService.Login(username, password)
        .then( () => console.log('login clicked'));
    }
}