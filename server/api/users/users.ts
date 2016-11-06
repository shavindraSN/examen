///<reference path="../../../typings/globals/mysql/index.d.ts"/>
import { Router, Response, Request, NextFunction } from "express";
import * as mysql from 'mysql';
import { DbConnector } from '../../libs/common/db-connector';
import { UserFunctions } from '../../libs/api/user-functions'

const users: Router = Router();

users.get("/getAllUsers", (request: Request, response: Response) => {
    let dbConnector = new DbConnector();
    let userFunctions = new UserFunctions()

    dbConnector.connectToDb((error, connection) => {
        if (error) {
            return response.json({
                err: error
            });
        }
        else {
            userFunctions.getAllUsers(connection, (data) => {
                response.json({
                    users: data
                });
            })
        }
    })
});

/**
 * Retrieve users with specified user ID
 */
users.get("/getUser/:id", (request: Request, response: Response) => {
    let dbConnector = new DbConnector();
    let userFunctions = new UserFunctions()
    let connector: mysql.IConnection;

    dbConnector.connectToDb((error, connection) => {
        if(error) {
            return response.json({
                err: error
            });
        }
        else {
            userFunctions.getUser(request.params.id, connection, (data) => {
                response.json({
                    user: data
                })
            });
        }
    }) 
});

/**
 * Update user details with given details for given user ID
 */
users.put("/updateUser/:id", (request: Request, response: Response) => {
    let dbConnector = new DbConnector();
    let userFunctions = new UserFunctions()
    let connector: mysql.IConnection;

    let first_name = request.body.first_name;
    let last_name = request.body.last_name;
    let email = request.body.email;
    let pwd = request.body.pwd;
    let district = request.body.district;
    
    dbConnector.connectToDb((error, connection) => {
        if(error) {
            return response.json({
                err: error
            });
        }
        else {
            userFunctions.getUser(request.params.id, connection, (data) => {
                response.json({
                    user: data
                })
            });
        }
    }) 
});

/**
 * Insert new user  with given details 
 */

users.get("/uploadUser/:fname/:lname/:email/:email_ver/:pwd/:district/:nic/:pno/:pno_ver/:ty_id", (request: Request, response: Response) => {
    let dbConnector = new DbConnector();
    let userFunctions = new UserFunctions()
    let connector: mysql.IConnection;

    dbConnector.connectToDb((error, connection) => {
        if(error) {
            return response.json({
                err: error
            });
        }
        else {
           

                userFunctions.uploadUser(request.params.fname,request.params.lname,request.params.email,request.params.email_ver,request.params.pwd,request.params.district,request.params.nic,request.params.pno,request.params.pno_ver,request.params.ty_id,connection, (data) => {
                    response.json("true");
                });
            
        }
    }) 
});

/**
 * Delete new user  with given details 
 */

users.get("/deleteUser/:a", (request: Request, response: Response) => {
    let dbConnector = new DbConnector();
    let userFunctions = new UserFunctions()
    let connector: mysql.IConnection;

    dbConnector.connectToDb((error, connection) => {
        if(error) {
            return response.json({
                err: error
            });
        }
        else {
           userFunctions.deleteUser(request.params.a,connection, (data) => {
                    response.json("true");
                });
            
        }
    }) 
});

export { users }