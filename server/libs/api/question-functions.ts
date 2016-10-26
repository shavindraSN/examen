///<reference path="../../../typings/globals/mysql/index.d.ts"/>
import * as mysql from 'mysql';

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
        let query = 'SELECT * FROM questions WHERE= '+ subjectID.toString();
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
    getQuestionsById(questionIDs: number[], connection: mysql.IConnection, callback){
        let stringList = '(' + questionIDs.toString() + ')';
        let query = 'SELECT * FROM questions WHERE id in ' + stringList;
        connection.query(query, (err, rows) => {
            callback(rows);
        });
    }
}