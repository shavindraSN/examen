///<reference path="../../../typings/globals/shuffle-array/index.d.ts"/>
import * as shuffleArray from "shuffle-array";

export class QuizFunctions {
    count: number;
    temp = 0;
    all = new Array();
    all2 = new Array();

    constructor(jsonval) {
        let question = new Array();
        let time = new Array();

        for (var i = 0; i < jsonval.data.length; i++) {
            question.push(jsonval.data[i].id);
            time.push(jsonval.data[i].question_time);
            this.all.push([question[i], time[i]]);
        }
    }

    makeQuestionRandomArray() {
        shuffleArray(this.all);
       // console.log(this.all);
    }
    
    makeTime() {
        let question = new Array();
        let time = new Array();
        this.count = 0;

        for (var i = 0; i < this.all.length; i++) {
            this.temp = parseInt(this.all[i][1]);

            if (this.count + this.temp < 15) {
                this.count = this.count + this.temp;
                question.push(this.all[i]);
                time.push(this.all[i][1]);
                this.all2.push(this.all[i][0]);
            }
        }
        return this.all2;
    }
}
