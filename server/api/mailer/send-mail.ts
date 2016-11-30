///<reference path="../../../typings/globals/nodemailer/index.d.ts"/>

import { Router, Response, Request, NextFunction } from "express";
import * as nodemailer from "nodemailer"
import { MailFunctions } from '../../libs/api/mail-functions'

const mailer: Router = Router();
/**
 * End point for getting all questions of the database
 */
mailer.post("/send", (request: Request, response: Response) => {
   let mailfunctions = new MailFunctions();
   mailfunctions.sendMail(request.body.recipientMail, request.body.subject, request.body.text, (error, info) =>{
       if(error) {
           response.json({response: error});
       } 
       else {
           response.json({response: info.response})
       }
   })
});


mailer.post("/addQuestions", (request: Request, response: Response) => {

    let user_name = request.body.user_name;
    // question.qno = request.body.qno;
    // question.correct_ans_no = request.body.correct_ans_no;
    // question.question_time = request.body.question_time;
    // question.paper_id = request.body.paper_id;
    // question.subject_id = request.body.subject_id;
    // question.is_image = request.body.is_image;
    // question.image_url = request.body.image_url;
    // question.question = request.body.question;
    // question.answers = request.body.answers;

    // dbConnector.connectToDb((error, connection) => {
    //     if (error) {
    //         return response.json({
    //             err: error
    //         });
    //     }
    //     else {
    //         console.log('add Questions ', question);
    //         response.json({message: "Inserted Successfully"});
    //     }
    // });
});

export { mailer }