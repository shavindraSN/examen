import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VerifyEmailService } from './verify-email.service';
import { NotificationsService, SimpleNotificationsComponent } from 'angular2-notifications';

@Component({
    selector: 'verify-email',
    templateUrl: 'client/components/verifyEmail/verify-email.component.html',
    styleUrls: ['client/customCss/login-style.css'],
    providers: [VerifyEmailService]
})
export class VerifyEmailComponent { 
    verificationCode;
    userFName: string;
    userID;

    options = {
        position: ['top', 'right'],
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true
    };

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _notification: NotificationsService,
        private _verifyEmailService: VerifyEmailService) { }

    ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            this.userFName = params['fname'];
            this.userID = params['id']
        });
    }

    resendMail(id) {
        // Get the useremail
        // create new token and send the mail to that email
    }
    
    onSubmit(form) {
        this.verifyUser();
    }

    /**
     * Verify user emails
     */
    verifyUser() {
        this._verifyEmailService.verifyEmail(this.userID, this.verificationCode)
        .then(data => {;
            if (data.json().status) {
                this._router.navigate(['/login'])
            }
            else {
                this._notification.error('Invalid Code', 'Invalid verification code');
            }
        });
    }

    /**
     * 
     */
}