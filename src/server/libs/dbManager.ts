/// <reference path="../../../typings/index.d.ts" />
import { dbConfigs } from "../config";
let mysql = require('mysql');
let connection = mysql.createConnection(dbConfigs);

/**
 * This interface describes Response object
 */
interface Response {

};

/**
 * This class is a middleware to interact with the database
 * All the database interactions should handled through this class
 */
export class DBManager {
 executeQuery(query:string):void{
        connection.connect();
        connection.query(query, function (err, rows, fields) {
            if (err) throw err;
            console.log(rows);
        });
        connection.end();
 }
}
