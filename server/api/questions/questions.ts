///<reference path="../../../typings/globals/mysql/index.d.ts"/>
import { Router, Response, Request, NextFunction } from "express";
import * as mysql from 'mysql';
import { DbConnector } from '../../libs/common/db-connector';
import { QuestionFunctions } from '../../libs/api/question-functions';
import { QuizFunctions } from '../../libs/api/quiz-functions';
import { Question } from '../../../client/sharedClasses/question';

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
    let userFunctions = new QuestionFunctions();
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

                let question = { data: tempQuestionArray };
                let quizFunctions = new QuizFunctions(request.params.time, question);
                let result = quizFunctions.makeQuestionRandomArray()
                userFunctions.getQuestionsById(result, connection, (data) => {
                    response.json({questions: data});
                })
            });
        }
    }) 
});

/**
 * API Route for adding questions to database
 */
questions.post("/addQuestions", (request: Request, response: Response) => {
    let dbConnector = new DbConnector();
    let question = new Question();
    let questionFunctions = new QuestionFunctions(); 
    let user_name = request.body.user_name;
    question.qno = request.body.qno;
    question.correct_ans_no = request.body.correct_ans_no;
    question.question_time = request.body.question_time;
    question.paper_id = request.body.paper_id;
    question.subject_id = request.body.subject_id;
    question.is_image = request.body.is_image;
    question.image_url = request.body.image_url;
    question.question = request.body.question;
    question.answers = request.body.answers;

    dbConnector.connectToDb((error, connection) => {
        if (error) {
            return response.json({
                err: error
            });
        }
        else {
            console.log('add Questions ', question);
            response.json({message: "Inserted Successfully"});
        }
    });
});

export { questions }