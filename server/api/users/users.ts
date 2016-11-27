///<reference path="../../../typings/globals/mysql/index.d.ts"/>
///<reference path="../../../typings/globals/bcryptjs/index.d.ts"/>
import { Router, Response, Request, NextFunction } from "express";
import * as mysql from 'mysql';
import * as bcrypt from 'bcryptjs';
import { DbConnector } from '../../libs/common/db-connector';
import { UserFunctions } from '../../libs/api/user-functions';
import { User } from '../../../client/sharedClasses/user';

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
        if (error) {
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
        if (error) {
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

users.post("/register", (request: Request, response: Response) => {
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
            let user = new User();
            user.first_name = request.body.first_name;
            user.last_name = request.body.last_name;
            user.email = request.body.email;
            user.email_verified = false;
            if(request.body.password){
                user.password = bcrypt.hashSync(request.body.password);
            }
            else if(request.body.hashed_password){
                user.password = request.body.hashed_password;
            }
            else if(request.body.password && request.body.hashed_password) {
                user.password = request.body.hashed_password;
            }
            user.district = request.body.district;
            user.nic = request.body.nic;
            user.phone = request.body.phone;
            user.phone_no_verified = request.body.phone_no_verified;
            user.type_id = request.body.type_id;

            userFunctions.registerUser(user, connection, (data) => {
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
        if (error) {
            return response.json({
                err: error
            });
        }
        else {
            userFunctions.deleteUser(request.params.a, connection, (data) => {
                response.json("true");
            });

        }
    })
});

users.get("/getUserTypes", (request: Request, response: Response) => {
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
            userFunctions.getUserTypes(connection, (data) => {
                response.json({
                    user_type: data
                })
            });
        }
    })
});

export { users }