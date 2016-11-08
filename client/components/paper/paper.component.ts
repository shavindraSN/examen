import { Component, OnInit, AfterViewInit, AfterViewChecked, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PaperService } from './paper.service';
import { Question } from '../../sharedClasses/question'
import { Answer } from '../../sharedClasses/answer'

@Component({
    selector: 'paper',
    templateUrl: 'client/components/paper/paper.component.html',
    providers: [PaperService]
})
export class PaperComponent implements OnInit, AfterViewInit, AfterViewChecked {

    subjectID: number;
    paperTime: number;

    questions: Question[];
    selectedQId: number;
    selectedQuestion: Question;

    constructor(private paperservice: PaperService, private route: ActivatedRoute) { }

    ngAfterViewInit() {
        //this.paperTime = this.getPaperTime(this.questions);
     }

    ngAfterViewChecked(){
        $.material.init();
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.subjectID = +params['subid'];
            this.paperTime = +params['time'];
            this.getQuestions(this.subjectID, this.paperTime);
        });
    }

    getQuestions(subjectID, time): void {
        this.paperservice.getQuestions(subjectID, time)
        .then((questions) => {
            this.questions = questions; this.paperTime = this.getPaperTime(this.questions);
        })
    }

    getPaperTime(questions: Question[]):number {
        return this.paperservice.calculateTotalTime(questions);
    }
    /**
     * Event handler of the question number click event
     * @param {Question} question - Question object of the seleced question 
     */
    onSelect(question: Question): void {
        this.selectedQuestion = question;
    }

    /**
     * Event handler of the answer selection 
     */
    onAnswerSelect(answer: Answer): void {
        this.questions[this.selectedQuestion.qno-1].selectedAnswerNo = answer.answer_no;
    }
}