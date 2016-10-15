import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'client/components/login/login.component.html',
    styleUrls: ['client/components/login/login.styles.css']
})
/**
 * Login component is to display login screen and relevent method 
 * to act as authentication interface
 */
export class LoginComponent implements AfterViewInit{
    ngAfterViewInit() {
        $.material.init()
    }
}