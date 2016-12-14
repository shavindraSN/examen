import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RegistrationService } from './registration.service';
import { User, UserType } from '../../sharedClasses/user';
import { districtList, District } from './districts';
import { NotificationsService, SimpleNotificationsComponent } from 'angular2-notifications';

@Component({
    selector: 'login',
    templateUrl: 'client/components/registration/registration.component.html',
    styleUrls: ['client/customCss/login-style.css'],
    providers: [RegistrationService]
})
/**
 * Registration component is to display registration screen and relevent method
 * to act as authentication interface
 */
export class RegistrationComponent implements AfterViewInit, OnInit {
    userTypes: UserType[];
    selectedDistrict: string;
    password: string;
    cnfrmPassword: string;
    selectedUserTypeID: number;
    submitted: boolean;
    districts = districtList;
    validationMessage: string;

    options = {
        position: ['top', 'right'],
        timeOut: 3000,
        lastOnBottom: true,
        clickToClose: true
    };

    model: any = {};
    error: boolean = false;

    constructor(
        private registrationService: RegistrationService,
        private _notification: NotificationsService,
        private _router: Router
    ) { }

    ngAfterViewInit() {
        $.material.init()
    }

    onChange(id) {
        this.selectedUserTypeID = id;
    }

    onSelectDistrict(district: string) {
        this.selectedDistrict = district;
    }

    validForm(): boolean {
        if ((this.password && this.cnfrmPassword) && (this.password != this.cnfrmPassword)) {
            this.validationMessage = "Password does not match";
            return false;
        }
        else if (this.password && this.cnfrmPassword && this.password == this.cnfrmPassword && this.password.length < 8) {
            this.validationMessage = "Password should have at least 8 digits"
            return false;
        }
        else {
            return true;
        }
    }

    onSubmit(form) {
        let newUser = new User();
        newUser.first_name = form.value.inputFName;
        newUser.last_name = form.value.inputLName;
        newUser.email = form.value.inputEmail;
        newUser.email_verified = false;
        newUser.password = form.value.inputPassword; //use bcrypt
        newUser.district = form.value.selectDistrict;
        newUser.nic = form.value.inputNic;
        newUser.phone = form.value.inputPhone;
        newUser.phone_no_verified = false;
        newUser.type_id = form.value.selectUserType;
        this.registerUser(newUser);

    }
    registerUser(user: User) {
        this.registrationService.registerUser(user)
            .then(response => {
                console.log(response);
                if(response.res.code == 1036) {
                    this._notification.error('Account already exists', 'The Email you entered is already registered');
                }
                else {
                    // route to verification process
                    console.log(response.res);
                    this._router.navigateByUrl('/verifyEmail/' + user.first_name + '/' +response.res.insertId);
                }
            });
    }

    ngOnInit() {
        this.getUserTypes();
    }
    getUserTypes(): void {
        this.registrationService.getUserTypes()
            .then(userTypes => this.userTypes = userTypes);
    }
}
