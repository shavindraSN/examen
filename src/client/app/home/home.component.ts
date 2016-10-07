import { Component, AfterViewInit } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements AfterViewInit {

    phyPapers = 25;
    chemPapers = 15;
    bioPapers = 12;

    phyQuestions = 300;
    chemQuestions = 200;
    bioQuestion = 120;
    /**
     * initialize the material after view is rendered
     */
    ngAfterViewInit() {
        $.material.init();
    }

    /**
     * This method will get total Papers student has tried for given subject
     */
    getTotalNumberOfPapers(subjectID: number): number {
        let totalPapers: number;
        totalPapers = 10; // get from the service when it is ready
        return totalPapers;
    }

    /**
     * This method will fetch total number of question the student
     * tried out through-out the history
     */
    getTotalNumberOfQuestions(subjectID: number): number {
        let totalQuestions: number;
        totalQuestions = 300;
        return totalQuestions; // get from the service when it is ready
    }
}
