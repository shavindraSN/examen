import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { AuthService } from '../../service/auth.service';

@Component({
    selector: "home",
    templateUrl: 'client/components/home/home.component.html',
    providers: [AuthService]
})
export class HomeComponent implements OnInit {
    authenticate = false;
    constructor(
        private _authService: AuthService,
        private _router: Router
    ) { }
    ngOnInit() {
        if (!localStorage.getItem('auth')) {
            this._authService.getCredentials(() => {
                this.authenticate = true;
            });
        }
        else {
            this._authService.getUserDetails()
                .then(data => {
                    if (data.email_verified == 1) {
                        this._router.navigate(['/home']);
                    }
                    else {
                        let name = data.firstName;
                        let id = data.id;
                        let url = 'verifyEmail/' + name + '/' + id;
                        this._router.navigate([url]);
                    }
                })
            this.authenticate = this._authService.checkCredentials();
        }
    }
}
