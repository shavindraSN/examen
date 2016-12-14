import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router'

@Component({
    selector: 'history',
    templateUrl: 'client/components/history/history.component.html',
    providers: [HistoryService, AuthService]
})
export class HistoryComponent implements OnInit {
    userID;
    authenticate: boolean = false;
    history;

    constructor(
        private _authService: AuthService,
        private _historyService: HistoryService,
        private _router: Router
    ) { }

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
                this.getHistory(this.userID)
            });
    }

    getHistory(userID) {
        this._historyService.fetchHistory(userID)
        .then(data => {
            this.history = data.data;
            let i=0
            for(let row of this.history) {
                console.log(row.total_questions);
                //console.log(row.)
                this.history[i].percentage = ((parseInt(row.total_correct) / parseInt(row.total_questions))*100).toFixed(2);
                i++;
            }
        })
    }
}