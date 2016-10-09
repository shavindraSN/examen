import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { PaperService } from './paper.service';
import { Question } from './question'

@Component({
    moduleId: module.id,
    selector: 'paper',
    templateUrl: 'paper.component.html',
    providers: [PaperService]
})
export class PaperComponent implements OnInit, AfterViewInit{
    questions: Question[];
    selectedQId: number;
    selectedQuestion: Question;

    constructor(private paperservice:PaperService) {}

    ngAfterViewInit() {
        
    }
    ngAfterViewChecked(){
        $.material.init();
    }
    
    getQuestions():void {
        this.questions = this.paperservice.getQuestion();
    }
    ngOnInit(): void {
        this.getQuestions();
    }
    onSelect(question:Question):void {
        this.selectedQuestion = question;
    }
}