import { Component } from '@angular/core';

@Component({
    selector: 'model-paper-panel',
    templateUrl: 'client/components/home/modelPaper/model-paper.component.html'
})
export class ModelPaperComponent {

    phyPapers = 25;
    chemPapers = 15;
    bioPapers = 12;
    totalP = this.phyPapers + this.chemPapers + this.bioPapers;

    phyQuestions = 300;
    chemQuestions = 200;
    bioQuestions = 120;
    totalQ = (this.phyQuestions + this.chemQuestions + this.bioQuestions)

    /**
     * This method is to get the total number of questions that a given 
     * student has tried out for given subject.
     */
    getTotalNumberOfPapers(subjectID: number, studentID: number): number {
        let totalPapers: number;
        totalPapers = 10; // get from the service when it is ready
        return totalPapers;
    }
}