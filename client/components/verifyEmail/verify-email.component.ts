import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'verify-email',
    templateUrl: 'client/components/verifyEmail/verify-email.component.html',
    styleUrls: ['client/customCss/login-style.css']
})
export class VerifyEmailComponent { 
    userFName: string;
    constructor(private _route: ActivatedRoute) { }

    ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            this.userFName = params['fname'];
        });
    }

    resendMail(id) {
        // Get the useremail
        // create new token and send the mail to that email
    }
    
}