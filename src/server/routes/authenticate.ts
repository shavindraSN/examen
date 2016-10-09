/// <reference path="../../../typings/index.d.ts" />
import{ Router, Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { DBManager } from "../libs/dbManager";

let passport = require('passport');
let LocalStrategy = require('passport-local');

const authenticateRouter: Router = Router();

/**
 * Serialize the user details
 */
passport.serializeUser((user, done) => {
    done(null, {
        id: user.id,
        name: user.displayName,
        email: user.emails[0].value,

    })
});

/**
 * Deserialize the user details
 */
passport.deserializeUser((user, done) =>{
    done(null, user);
});

/**
 * 
 */
passport.use(new LocalStrategy(
    function(username, passport, done) {
        //username.
    }
));

/**
 * Authenticate the user with username and password
 */
