///<reference path="../../../typings/globals/shuffle-array/index.d.ts"/>
import * as shuffleArray from "shuffle-array";

export class QuizFunctions {
    
    count: number;
    temp = 0;
    firstArray = new Array();
    secondArray = new Array();
    quizeTime:number;

    /**
     * Counstructor  initialize base variables
     * @param {object} questionJson - Rows return from the query
     * @param {object} quizeTime - quize time passed by the user
     */ 
    constructor(quizeTime:number, questionJson) {
        let question = new Array();
        let time = new Array();
        this.quizeTime=quizeTime;
        for (var i = 0; i < questionJson.data.length; i++) {
            question.push(questionJson.data[i].id);
            time.push(questionJson.data[i].question_time);
            this.firstArray.push([question[i], time[i]]);
        }
    }

    /**
     * Method  make a random array
     * @return {object} firstArray -json object consists of qestion id
     */ 
    makeQuestionRandomArray() {
        let question = new Array();
        let time = new Array();
        this.count = 0;

        shuffleArray(this.firstArray);
        for (var i = 0; i < this.firstArray.length; i++) {
            this.temp = parseInt(this.firstArray[i][1]);

            if (this.count + this.temp < this.quizeTime) {
                this.count = this.count + this.temp;
                question.push(this.firstArray[i]);
                time.push(this.firstArray[i][1]);
                this.secondArray.push(this.firstArray[i][0]);
            }
        }
        return this.secondArray;
    }
}

