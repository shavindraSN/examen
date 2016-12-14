import { Component } from '@angular/core';
import { NotificationsService, SimpleNotificationsComponent } from 'angular2-notifications';
import { districtList, District } from '../../registration/districts';

@Component({
    selector: 'add-questions',
    templateUrl: 'client/components/uploadQuestions/addQuestions/add-questions.component.html'
})
export class AddQuestionsComponent {
    districts = districtList;
    options = {
        position: ['top', 'right'],
        timeOut: 3000,
        lastOnBottom: true,
        clickToClose: true
    };

    constructor(
        private _notification: NotificationsService
    ) { }
}