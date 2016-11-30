import { Component, OnInit } from '@angular/core';

import { AlertService } from '../service/alert.service'

@Component({
    selector: 'alert',
    templateUrl: 'client/directive/alert.component.html',
    providers: [AlertService]
})
export class AlertComponent implements OnInit{
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}