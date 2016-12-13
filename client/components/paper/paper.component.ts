import { Component, OnInit, AfterViewInit, AfterViewChecked, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PaperService } from './paper.service';
import { Question } from '../../sharedClasses/question';
import { Answer } from '../../sharedClasses/answer';
import { AuthService } from '../../service/auth.service'
import { CustomDateTime } from '../../sharedClasses/date-time';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'paper',
    templateUrl: 'client/components/paper/paper.component.html',
    providers: [PaperService, AuthService]
})
export class PaperComponent implements OnInit, AfterViewInit, AfterViewChecked {
    authenticate: boolean = false;
    displayTime = "something";
    subjectID: number;
    paperTime: number;
    started = false;
    questions: Question[];
    selectedQId: number;
    selectedQuestion: Question;
    timeRemaining: number;
    totalSeconds: number;
    customDateTime = new CustomDateTime();
    isTimeUp = false;

    constructor(
        private _paperservice: PaperService, 
        private _route: ActivatedRoute,
        private _authService: AuthService
        ) { }

    ngAfterViewInit() {
    }

    ngAfterViewChecked() {
        $.material.init();
    }

    ngOnInit(): void {
        if(!localStorage.getItem('auth')) {
            this._authService.getCredentials(() => {
                this.authenticate = true;
            });
        }
        else {
            this.authenticate = this._authService.checkCredentials();
        }
        
        this._route.params.forEach((params: Params) => {
            this.subjectID = +params['subid'];
            this.paperTime = +params['time'];
            this.getQuestions(this.subjectID, this.paperTime);
        });
        
    }

    getQuestions(subjectID, time): void {
        this._paperservice.getQuestions(subjectID, time)
            .then((questions) => {
                this.questions = questions; 
                this.paperTime = this.getPaperTime(this.questions);
                this.timeRemaining = this.paperTime;
            });
    }

    getPaperTime(questions: Question[]): number {
        return this._paperservice.calculateTotalTime(questions);
    }
    /**
     * Event handler of the question number click event
     * @param {Question} question - Question object of the seleced question 
     */
    onSelect(question: Question): void {
        this.selectedQuestion = question;
        if(!this.started) {
            this.timer();
        }
        this.started = true;
    }

    /**
     * Event handler of the answer selection 
     */
    onAnswerSelect(answer: Answer): void {
        this.questions[this.selectedQuestion.qno - 1].selectedAnswerNo = answer.answer_no;
    }

    timer() {
        let timer = Observable.timer(2000, 1000);
        timer.subscribe(t => {
            this.totalSeconds = this.paperTime * 60 - t;
            this.customDateTime.hours = Math.floor(this.totalSeconds / 3600);
            this.totalSeconds %= 3600;
            this.customDateTime.minutes = Math.floor(this.totalSeconds / 60);
            this.customDateTime.seconds = this.totalSeconds % 60;
            this.customDateTime.setFormattedString();
        });
    }
}