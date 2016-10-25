///<reference path="../../../typings/globals/mysql/index.d.ts"/>
import { Router, Response, Request, NextFunction } from "express";
import * as mysql from 'mysql';
import { DbConnector } from '../../libs/common/db-connector';
import { QuestionFunctions } from '../../libs/api/question-functions';
import { QuizFunctions } from '../../libs/api/quiz-functions';

const questions: Router = Router();
/**
 * End point for getting all questions of the database
 */
questions.get("/getAllQuestions", (request: Request, response: Response) => {
    let dbConnector = new DbConnector();
    let questionFunctions = new QuestionFunctions();

    dbConnector.connectToDb((error, connection) => {
        if (error) {
            return response.json({
                err: error
            });
        }
        else {
            questionFunctions.getAllQuestion(connection, (data) => {
                response.json({
                    questions: data
                });
            });
        }
    })
});

/**
 * Retrieve question ID and question time of question list for given subject
 */
questions.get("/getQuestionIdTime/:subject_id/:time", (request: Request, response: Response) => {
    let dbConnector = new DbConnector();
    let userFunctions = new QuestionFunctions()
    let connector: mysql.IConnection;

    dbConnector.connectToDb((error, connection) => {
        if(error) {
            return response.json({
                err: error
            });
        }
        else {
            userFunctions.getQuestionIdTime(request.params.subject_id, connection, (err, questions) => {
                
                let tempQuestionArray = new Array();
                for(let question of questions) {
                    tempQuestionArray.push({'id': question.id, 'question_time':question.question_time});
                }

                let question = { data: tempQuestionArray }
                let quizFunctions = new QuizFunctions(question);

                quizFunctions.makeQuestionRandomArray();
                let result = quizFunctions.makeTime();

                userFunctions.getQuestionsById(result, connection, (data) => {
                    response.json({questions: data});
                })
            });
        }
    }) 
});

export { questions }