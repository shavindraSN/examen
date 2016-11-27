import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { User, UserType } from '../../sharedClasses/User';
import { districtList, District } from './districts';

@Component({
    selector: 'login',
    templateUrl: 'client/components/registration/registration.component.html',
    styleUrls: ['client/components/registration/registration.styles.css'],
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

    constructor(private registrationService: RegistrationService) { }

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
        //console.log(form.value.selectDistrict);
        //console.log(form.value.selectUserType);
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
        console.log(newUser);
        this.registerUser(newUser);

    }
    registerUser(user: User) {
        this.registrationService.registerUser(user)
            .then(response => console.log(response));
    }
    ngOnInit() {
        this.getUserTypes();
    }
    getUserTypes(): void {
        this.registrationService.getUserTypes()
            .then(userTypes => this.userTypes = userTypes);
    }
}
