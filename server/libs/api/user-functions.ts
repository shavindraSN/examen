///<reference path="../../../typings/globals/mysql/index.d.ts"/>
import * as mysql from 'mysql';

export class UserFunctions {

    /**
     * Callback for responding with user details query from the Database as a JSON object
     * 
     * @callback sendResponse
     * @param {object} rows - Rows return from the query
     */

    /**
     * Method get all user details from the database. 
     * 
     * @param {mysql.IConnection} connection - Connection object that has connection metadata
     * @param {sendResponse} callback - Response rows as JSON to the request
     * 
     */ 
    getAllUsers(connection: mysql.IConnection, callback) {
        let query = 'SELECT * FROM users';
        connection.query(query, (err, rows) => {
            callback(rows);
        });
    }
}