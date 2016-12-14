import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Component({
    selector: 'navbar',
    templateUrl: 'client/components/shared/navbar/navbar.component.html',
    providers: [AuthService]
})
export class NavBarComponent implements AfterViewInit{

    constructor(private authService: AuthService) {}
    ngAfterViewInit(){
        $.material.init()
    }
    logout() {
        this.authService.logout();
    }
}