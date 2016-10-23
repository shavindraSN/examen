///<reference path="../../../typings/globals/mysql/index.d.ts"/>

import * as mysql from 'mysql';
import { dbConfig } from '../../config';

/**
 * Provides Database connectivity related services 
 */
export class DbConnector {
    /**
     * Callback function for providing the connection object
     * 
     * @callback provideConnection
     * @param {object} err - Error object if there is a error occured while connecting
     *                       connecting to the database.
     * @param {IConnection} connection - Connection object that can be used to connect and 
     *                                   query that database
     */

    /**
     * Pass connection object to its callback function. This connection object is used to 
     * connect and query the database.
     * 
     * @param {provideConnection} callback - Pass connection to other functions
     */
    connectToDb(callback): any {
        let connection = mysql.createConnection(dbConfig);

        connection.connect(err => {
            callback(err, connection);
        });
    }
}