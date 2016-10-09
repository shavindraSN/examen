import { Component, AfterViewInit } from '@angular/core';
import { ModelPaperComponent } from './modelPaper/model-paper.component'
import { TimeModeComponent } from './timeMode/time-mode.component';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements AfterViewInit {    
    /**
     * initialize the material after view is rendered
     */
    ngAfterViewInit() {
        $.material.init();
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
