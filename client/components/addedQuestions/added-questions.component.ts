import { Component, OnInit } from '@angular/core';
import { AddedQuestionService } from './added-question.service';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'added-questions',
    templateUrl: 'client/components/addedQuestions/added-questions.component.html',
    providers: [AddedQuestionService, AuthService]
}) 
export class AddedQuestionsComponent implements OnInit { 
    authenticate = false;
    userID;
    questions;
    constructor (
        private _addedQuestionsService: AddedQuestionService,
        private _authService: AuthService
    ) {}

    ngOnInit() {
        if (!localStorage.getItem('auth')) {
            this._authService.getCredentials(() => {
                this.authenticate = true;
            });
        }
        else {
            this.authenticate = this._authService.checkCredentials();
        }

        this._authService.getUserDetails()
            .then(data => {
                this.userID = data.id;
                this.getAddedQuestion(this.userID)
            });
    }
    getAddedQuestion(userID) {
        this._addedQuestionsService.getAddedQuestions(userID)
        .then(data => {
            this.questions = data.data;
        })
    }
}