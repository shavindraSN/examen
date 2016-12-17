import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Component({
    selector: 'navbar',
    templateUrl: 'client/components/shared/navbar/navbar.component.html',
    providers: [AuthService]
})
export class NavBarComponent implements AfterViewInit, OnInit{
    loggedUserType: boolean = false;
    constructor(private _authService: AuthService) {}
    ngAfterViewInit(){
        $.material.init()
    }

    ngOnInit(){
        this._authService.getUserDetails()
        .then(data => {
            if(data.userType == 1) {
                this.loggedUserType = false;
            }
            else {
                this.loggedUserType = true;
            }
        });
    }

    logout() {
        this._authService.logout();
    }
}