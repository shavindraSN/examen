import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AddedQuestionService {
    constructor(
        private _http: Http
    ) {}

    getAddedQuestions(userID) {
        let url = 'users/get_added_question/' + userID;

        return this._http.get(url)
        .toPromise()
        .then(data => data.json())
        .catch(error => {
            console.log(error);
        })
    }
}