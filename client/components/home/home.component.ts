import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../service/auth.service'

@Component({
    selector: "home",
    templateUrl: 'client/components/home/home.component.html',
    providers: [AuthService]
})
export class HomeComponent implements OnInit {
    authenticate = false;
    constructor(private _authService: AuthService) {}
    ngOnInit() {
        if(!localStorage.getItem('auth')) {
            this._authService.getCredentials(() => {
                this.authenticate = true;
            });
        }
        else {
            this.authenticate = this._authService.checkCredentials();
        }
    }
}
