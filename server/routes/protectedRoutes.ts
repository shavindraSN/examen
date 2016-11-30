///<reference path="../../typings/globals/express/index.d.ts"/>
///<reference path="../../typings/globals/express-session/index.d.ts"/>
import { Router, Response, Request, NextFunction } from "express";
import * as session from 'express-session';
import * as passport from "passport";
import * as localStrategy from "passport-local";
import { DbConnector } from '../libs/common/db-connector';

var cookieParser = require('cookie-parser');

const login: Router = Router();

login.use(session({
    secret: 'vidyapathaisalwaysrunning',
    resave: true,
    saveUninitialized: true
}))

login.use(cookieParser());
login.use(passport.initialize());
login.use(passport.session()); // persistent login sessions
/**
 * End point for get request
 */
login.get("/getall", (request: Request, response: Response) => {

});


/**
 * API Route for login
 */
login.post('/login', passport.authenticate('local-login', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}),
    function (req, res) {
        console.log("hello");

        if (req.body.remember) {
            req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
            req.session.cookie.expires = false;
        }
        res.redirect('/');
    });

export { login }