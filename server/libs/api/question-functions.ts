///<reference path="../../../typings/globals/mysql/index.d.ts"/>
import * as mysql from 'mysql';
import * as Excel from "xls-to-json";
import { Question } from '../../../client/sharedClasses/question';
import { Answer } from '../../../client/sharedClasses/answer';
import { Error } from '../../../client/sharedClasses/error';
import { User } from '../../../client/sharedClasses/user';

export class QuestionFunctions {
    /**
     * Callback for responding with question details query from the Database as a JSON object
     * 
     * @callback sendResponse
     * @param {object} rows - Rows return from the query
     */

    /**
     * Method get all question details from the database. 
     * 
     * @param {mysql.IConnection} connection - Connection object that has connection metadata
     * @param {sendResponse} callback - Response rows as JSON to the request
     * 
     */
    getAllQuestion(connection: mysql.IConnection, callback) {
        let query = 'SELECT * FROM questions';
        connection.query(query, (err, rows) => {
            callback(rows);
        });
    }

    /**
     * Callback for responding with question details for given question ID query from the Database as a JSON object
     * 
     * @callback sendResponse
     * @param {object} rows - Rows return from the query
     */

    /**
     * Get all question details from the database. 
     * 
     * @param {mysql.IConnection} connection - Connection object that has connection metadata
     * @param {sendResponse} callback - Response rows as JSON to the request
     * 
     */
    getQuestions(subjectID: number, connection: mysql.IConnection, callback) {
        let query = 'SELECT * FROM questions WHERE= ' + subjectID.toString();
        connection.query(query, (err, rows) => {
            callback(rows);
        });
    }

    /**
     * Retrieve question ID and Question Time for given subject ID
     */
    getQuestionIdTime(subjectID: number, connection: mysql.IConnection, callback) {
        let query = 'SELECT id, question_time FROM questions WHERE subject_id= ' + subjectID.toString();
        connection.query(query, (err, rows) => {
            callback(err, rows);
        });
    }

    /**
     * retrieve question and its all the details for given set of question IDs
     */
    getQuestionsById(questionIDs: number[], connection: mysql.IConnection, callback) {
        let stringList = '(' + questionIDs.toString() + ')';
        let query = `SELECT q.id, q.correct_ans_no, q.question_time, q.paper_id, q.subject_id, q.is_image, q.image_url, q.question,
                        a.id as answer_id, a.is_image as is_answer_image, a.answer_no, a.answer, a.image_url
                    FROM questions q, answers a
                    WHERE q.id = a.question_id AND q.id IN ` + stringList;
        connection.query(query, (err, rows) => {
            //this.questionObjectMaker(rows);
            callback(this.questionObjectMaker(rows));
        });
    }

    /**
     * Create Question object array using row objects retrieve from the database
     * This question array contains question details and answer details as per to their
     * class specification Answer and Question
     * 
     * @param {object} rowObjects - array of row object returned by mysql query method
     * 
     * @return {Question[]} - question array with Question class specification
     */
    questionObjectMaker(rowObjects): Question[] {
        let questionArray: Question[] = [];
        let tempObject: Question;
        let qid: number;
        let qno: number = 1;
        for (let rowObject of rowObjects) {
            if (!tempObject || tempObject.id != rowObject.id) {
                tempObject = new Question();

                tempObject.id = rowObject.id;
                tempObject.qno = qno;
                tempObject.correct_ans_no = rowObject.correct_ans_no;
                tempObject.question_time = rowObject.question_time;
                tempObject.paper_id = rowObject.paper_id;
                tempObject.subject_id = rowObject.subject_id;
                tempObject.is_image = rowObject.is_image;
                tempObject.image_url = rowObject.image_url;
                tempObject.question = rowObject.question;

                tempObject.answers = [];
                tempObject.answers.push({
                    answer_no: rowObject.answer_no,
                    answer_id: rowObject.answer_id,
                    answer_is_image: rowObject.answer_is_image,
                    answer_image_url: rowObject.image_url,
                    answer: rowObject.answer
                })
                qno++;
            }
            else {
                tempObject.answers.push({
                    answer_no: rowObject.answer_no,
                    answer_id: rowObject.answer_id,
                    answer_is_image: rowObject.answer_is_image,
                    answer_image_url: rowObject.image_url,
                    answer: rowObject.answer
                })
            }

            if (!qid || qid != rowObject.id) {
                questionArray.push(tempObject);
                qid = rowObject.id;
            }
        }

        return questionArray;
    }

    /**
     * Upload Questions from Excel Sheet to Server
     * Excel file extention could be .xls and .xlsx only
     * 
     * @param {variable} fileName - name and path of the input excel file
     * 
     * @param {variable} sheetName - name of the sheet which questions are on
     */
    uploadQuestionsExcel(fileName, sheetName) {
     Excel({
                input: fileName,  
                output: null, 
                sheet: sheetName  
        }, function (err, result) {
                 if (err) {
                     console.error(err);
                } else {
                console.log(result);
                 return result;
            }
        });

    }

    /**
     * Insert question object to database. This process involve several steps
     * Inserting question to question table and insert answers details to answer table.
     * This function flatten the question object and create SQL query and execute created query,
     * get results and post those results to the request
     */
    addQuestion(connection: mysql.IConnection, question: Question, user: User, callback) {
        // Get the question ID and insert for answer table 
        // LAST_INSERT_ID()
        // Refer: http://stackoverflow.com/questions/5178697/mysql-insert-into-multiple-tables-database-normalization
        let answer_query = `INSERT INTO answers(question_id, is_image, answer_no, answer, image_url) 
                            VALUES`;

        for(let answer of question.answers) {
            answer_query += '(LAST_INSERT_ID()' + ',' + answer.answer_is_image + ',' + answer.answer_no + ',' + 
                            answer.answer + ',' + answer.answer_image_url + '),'
        }
        let question_query = `INSERT INTO questions
                    (correct_ans_no, question_time, paper_id, user_id, subject_id, is_image, image_url, question) 
                    VALUES(` + question.correct_ans_no + `,`+ question.question_time + `,`+ question.paper_id + `,`+ 
                     user.id + `,` + question.subject_id + `,`+ question.is_image + `,` + question.image_url +`,` + 
                     question.question +`);`;

        let transaction = 'BEGIN; ' + question_query +  ' ' + answer_query + 'COMMIT;';

        connection.query(transaction, (err, result) => {
            callback(result);
        });
    }

    validateQuestionObject(question: Question): Error {
        let error = new Error();
        if(!question.correct_ans_no || question.correct_ans_no) {
            error.err_no = 1601;
            error.err_msg = 'No correct answer number provided. Make sure to give correct answer number.';
        }
        else if(question.correct_ans_no < 1 || question.correct_ans_no > question.answers.length) {
            error.err_no = 1602;
            error.err_msg = 'Answer number correct. Answer number should not less than 1, more than max number';
        }
        /**
         * TO BE implemented - Complete validator logic.
         */

        return error;
    }
}
