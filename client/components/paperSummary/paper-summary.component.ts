import { Component } from '@angular/core';

@Component({
    selector: 'paper-summary',
    templateUrl: 'client/components/paperSummary/paper-summary.component.html'
})
export class PaperSummaryComponent {
    subject: string = 'Physics';
    duration: string = '120';
    paperYear: number = 2015
    numberOfQuestions: number = 40

    /**
     * Above numbers to be fetched from the database using API call
     */
 }