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

    /**
     * Callback for responding with specified user details that query from the Database as a JSON object
     * 
     * @callback sendResponse
     * @param {object} row - Row return from the query
     */

    /**
     * Get speficied user details from the database. 
     * 
     * @param {number} userID - ID of the use to retrieve data
     * @param {mysql.IConnection} connection - Connection object that has connection metadata
     * @param {sendResponse} callback - Response rows as JSON to the request
     * 
     */
    getUser(userID: number, connection: mysql.IConnection, callback) {
        let query = 'SELECT * FROM users WHERE id=' + userID.toString();
        connection.query(query, (err, row) => {
            callback(row);
        })
    }

    /**
     * Callback for responding with specified user details that query from the Database as a JSON object
     * 
     * @callback sendResponse
     * @param {object} row - Row return from the query
     */

    /**
     * Get speficied user details from the database. 
     * 
     * @param {number} userID - ID of the use to retrieve data
     * @param {string} userName - New User name to be updated with
     * @param {mysql.IConnection} connection - Connection object that has connection metadata
     * @param {sendResponse} callback - Response rows as JSON to the request
     * 
     */
    
    updateUser(userID: number, userName:string, connection: mysql.IConnection, callback) {
        let query = 'UPDATE users SET userName= WHERE id=' + userID.toString();
        connection.query(query, (err, row) => {
            callback(row);
        })
    }
}