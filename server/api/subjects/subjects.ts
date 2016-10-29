///<reference path="../../../typings/globals/mysql/index.d.ts"/>
import { Router, Response, Request, NextFunction } from "express";
import * as mysql from 'mysql';
import { DbConnector } from '../../libs/common/db-connector';
import { SubjectFunctions } from '../../libs/api/subject-functions'

const subjects: Router = Router();
/**
 * End point for getting all subjects of the database
 */
subjects.get("/getAvailableSubjects", (request: Request, response: Response) => {
    let dbConnector = new DbConnector();
    let subjectFunctions = new SubjectFunctions();

    dbConnector.connectToDb((error, connection) => {
        if (error) {
            return response.json({
                err: error
            });
        }
        else {
            subjectFunctions.getAvailableSubjects(connection, (data) => {
                response.json({
                    subjects: data
                });
            });
        }
    })
});

/**
 * Retrieve question ID and question time of question list for given subject
 */
subjects.get("/getQuestionIdTime/:subject_id/:time", (request: Request, response: Response) => {
 
});

export { subjects }