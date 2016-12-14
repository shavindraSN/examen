import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: 'client/components/profile/profile.component.html'
})
export class ProfileComponent {    
    options = {
        position: ['top', 'right'],
        timeOut: 3000,
        lastOnBottom: true,
        clickToClose: true
    };

}