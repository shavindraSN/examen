import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Subject } from '../../sharedClasses/subject'
import { Question } from '../../sharedClasses/question';


@Injectable()
export class PaperService {

    constructor(private _http: Http) { }

    getQuestions(subjectID, time): Promise<Question[]> {
        let api_url = 'questions/getQuestionIdTime/' + subjectID + '/' + time;

        return this._http.get(api_url)
            .toPromise()
            .then(response => response.json().questions as Question[])
            .catch(this.handleError)
    }

    calculateTotalTime(questionArray: Question[]): number {
        let totalTime = 0;
        for(let question of questionArray) {
            totalTime += question.question_time;
        }
        return totalTime;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}