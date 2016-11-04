import { Component, OnInit, ViewChild } from '@angular/core';
import { InitQuizPaperService } from './init-quiz-paper.service';
import { Subject } from '../../sharedClasses/subject';
import { PaperComponent } from '../paper/paper.component';
import { Router } from '@angular/router';

@Component({
    selector: 'quiz-paper',
    templateUrl: 'client/components/initQuizPaper/init-quiz-paper.component.html',
    providers: [InitQuizPaperService]
})
export class InitQuizPaperComponent implements OnInit {

    subjects: Subject[];
    selectedSubject: Subject;
    submitted: boolean;
    
    constructor(private initQuizPaperService: InitQuizPaperService, private _router: Router) { }

    getSubjects(): void {
        this.initQuizPaperService.getSubjects().then(subjects => this.subjects = subjects);
    }

    onSelectSubject(subject) {
        this.selectedSubject = subject;
    }
    ngOnInit() {
        this.getSubjects();
    }
    onclick(){
        console.log(this.subjects);
    }

    onSubmit(form) {
        this.submitted = true;
        this._router.navigateByUrl('/initquizpaper/paper/' + form.value.selectSubject +'/' + form.value.inputTime);

    }
 }