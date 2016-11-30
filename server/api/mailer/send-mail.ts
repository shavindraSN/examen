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

export { mailer }