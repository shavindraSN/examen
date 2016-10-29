///<reference path="../../../typings/globals/mysql/index.d.ts"/>
import * as mysql from 'mysql';
import { Subject } from '../../../client/sharedClasses/subject';

export class SubjectFunctions {

    /**
     * Callback for responding with available subject names from the Database as a JSON object
     * 
     * @callback sendResponse
     * @param {object} rows - Rows return from the query
     */

    /**
     * Method get available subject list from the database. 
     * 
     * @param {mysql.IConnection} connection - Connection object that has connection metadata
     * @param {sendResponse} callback - Response rows as JSON to the request
     * 
     */
    getAvailableSubjects(connection: mysql.IConnection, callback) {
        let query = 'call sp_get_available_subjects()';
        connection.query(query, (err, rows) => {
            let subjects: Subject[] = [];

            for(let subject of rows[0]) {
                subjects.push(subject)
            }
            callback(subjects)
        });
    }
}