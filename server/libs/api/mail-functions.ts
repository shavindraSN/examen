///<reference path="../../../typings/globals/nodemailer/index.d.ts"/>

import { Router, Response, Request, NextFunction } from "express";
import * as nodemailer from "nodemailer"

export class MailFunctions {
    sendMail(recipientMail, subject, text, callback) {
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'devalphateam@gmail.com',
                pass: 'devalpha'
            }
        });
        let mailOptions = {
            from: '<devalphateam@gmail.com> Examen Email Verification',
            to: recipientMail,
            subject: subject,
            text: text
        }

        transporter.sendMail(mailOptions, (error, info) => {
            callback(error, info);
        })
    }
}