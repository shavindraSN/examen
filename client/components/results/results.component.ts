import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { AuthService } from '../../service/auth.service';


@Component({
    selector: 'results',
    templateUrl: 'client/components/results/results.component.html',
    providers: [AuthService]
})
export class ResultsComponent implements OnInit {
    authenticate = true;
    correctAnswer: number;
    subjectID: number;
    totalQuestion: number;
    percentage: number;

    constructor(
        private _authService: AuthService,
        private _router: Router,
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        this._authService.getUserDetails()
            .then(data => {})
        this._route.params.forEach((params: Params) => {
            this.correctAnswer = +params['correct'];
            this.subjectID = +params['subid'];
            this.totalQuestion = +params['total'];
        });
        this.percentage = +((this.correctAnswer / this.totalQuestion) * 100).toFixed(2);
    }
}