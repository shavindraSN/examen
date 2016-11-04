import { Component, OnInit, AfterViewInit, AfterViewChecked, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PaperService } from './paper.service';
import { Question } from '../../sharedClasses/question'

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

    ngAfterViewInit() { }

    ngAfterViewChecked(){
        $.material.init();
    }

    getQuestions(subjectID, time): void {
        this.paperservice.getQuestions(subjectID, time)
        .then(questions => this.questions = questions)
    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.subjectID = +params['subid'];
            this.paperTime = +params['time'];
            // this.heroService.getHero(id)
            //     .then(hero => this.hero = hero);
            this.getQuestions(this.subjectID, this.paperTime);
            
        });
    }
    onSelect(question: Question): void {
        this.selectedQuestion = question;
    }
}