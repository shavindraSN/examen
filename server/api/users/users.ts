///<reference path="../../../typings/globals/mysql/index.d.ts"/>
import { Router, Response, Request, NextFunction } from "express";
import * as mysql from 'mysql';
import { DbConnector } from '../../libs/common/db-connector';
import { UserFunctions } from '../../libs/api/user-functions'

const users: Router = Router();

users.get("/getAllUsers", (request: Request, response: Response) => {
    let dbConnector = new DbConnector();
    let userFunctions = new UserFunctions()
    let connector: mysql.IConnection;

    dbConnector.connectToDb((error, connection) => {
        if (error) {
            return response.json({
                err: error
            });
        }
        else {
            userFunctions.getAllUsers(connection, (data) => {
                response.json({
                    users:data 
                });
            })
        }
    })
});

/**
 * Retrieve users with specified user ID
 */
users.get("/user:id", (request: Request, response: Response) => {
    response.json({
        users: [
            { name: 'test1' },
            { name: 'test2' }
        ]
    })

});

export { users }