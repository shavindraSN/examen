import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-about',
    templateUrl: 'about.component.html'
})
export class AboutComponent {
    userType: string = "Student";
    fullName = "Shavindra Manathunga";
    address = "No:445, Mihinthala Rd, Anuradhapura";
    email = "shavindramms@gmail.com";
    phone = "0715945570";
    district = "Anuradhapura";
    school = "Central College, Anuradhapura"
    /**
     * This set userType as fetched from the service
     */
    setUserType(userTypeServe:string): void {
        this.userType = userTypeServe;
    }
}
