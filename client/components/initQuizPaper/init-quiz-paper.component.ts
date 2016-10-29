import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InitQuizPaperService } from './init-quiz-paper.service';
import { Subject } from '../../sharedClasses/subject';
@Component({
    selector: 'quiz-paper',
    templateUrl: 'client/components/initQuizPaper/init-quiz-paper.component.html',
    providers: [InitQuizPaperService]
})
export class InitQuizPaperComponent implements OnInit, AfterViewInit {
    subjects: Subject[];
    selectedSubject: Subject;
    constructor(private initQuizPaperService: InitQuizPaperService) { }

    getSubjects(): void {
        this.initQuizPaperService.getSubjects().then(subjects => this.subjects = subjects);
    }

    onSelectSubject(subject) {
        this.selectedSubject = subject;
        console.log('helooooooo');
    }
    ngOnInit() {
        this.getSubjects();
    }

    ngAfterViewInit() {
    }
 }