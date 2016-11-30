///<reference path="../../../typings/globals/mysql/index.d.ts"/>
import * as mysql from 'mysql';
import { User } from '../../../client/sharedClasses/user'

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

     /**
     * Method uploaduser details from the database. 
     * 
     * @param {mysql.IConnection} connection - Connection object that has connection metadata
     * @param {sendResponse} callback - Response rows as JSON to the request
     * 
     */ 

    registerUser(user: User, connection: mysql.IConnection, callback){
      let query = `INSERT INTO users (first_name, last_name, email,
       email_verified, password, district, nic, phone_no, phone_no_verified, 
       type_id, verification_code) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        
        connection.query(query, [user.first_name, user.last_name, 
         user.email, user.email_verified, user.password, 
         user.district, user.nic, user.phone, user.phone_no_verified, 
         user.type_id, user.veri_code], (err, res) => {
            callback(res);
        });
    }


     /**
     * Method deleteuser details from the database. 
     * 
     * @param {mysql.IConnection} connection - Connection object that has connection metadata
     * @param {sendResponse} callback - Response rows as JSON to the request
     * 
     */ 

    deleteUser(uid,connection: mysql.IConnection, callback){
        let u_uid = uid.toString();
		
        let query = 'DELETE FROM users WHERE id =u_uid';
        connection.query(query, (err, res) => {
            callback(res);
        });
    }

    /**
     * Get User types from the database
     */
    getUserTypes(connection: mysql.IConnection, callback) {
        let query = 'SELECT * FROM usertypes';
        connection.query(query, (err, row) => {
            callback(row);
        });
    }
}