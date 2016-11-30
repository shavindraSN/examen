///<reference path="../../typings/globals/passport/index.d.ts"/>
///<reference path="../../typings/globals/passport-local/index.d.ts"/>
///<reference path="../../typings/globals/bcryptjs/index.d.ts"/>
///<reference path="../../typings/globals/mysql/index.d.ts"/>
///<reference path="../../typings/globals/connect-flash/index.d.ts"/>

import { Router, Request, Response } from "express";
import * as passport from 'passport';
import * as session from 'express-session';
import * as localStrategy from "passport-local";
import * as bcrypt from 'bcryptjs';
import * as mysql from 'mysql';
var flash = require('connect-flash')

import { User } from '../../client/sharedClasses/user';
import { dbConfig } from '../config';

let LocalStrategy = localStrategy.Strategy;
let connection = mysql.createConnection(dbConfig);
const authRouter: Router = Router();

/**
 * Serialize the user details to persistent login session
 */
passport.serializeUser((user: User, done) => {
    done(null, {
        id: user.id,
        fisrtName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        district: user.district,
        userType: user.type
    });
});

/**
 * Deserialize user details from login session
 */
passport.deserializeUser((user, done) => {
    done(null, user);
});

/**
 * Login with LocalStrategy
 */
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => {
    connection.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
        if (err) {
            return done(err);
        }
        if (!rows.length) {
            console.log('no user found')
            return done(null, false, { message: 'User not found' });
        }
        if (!bcrypt.compareSync(password, rows[0].password)) {
            console.log('incorrect password');
            return done(null, false, { message: 'Oops! Wrong password' });
        }
        console.log('password correct');
        return done(null, rows[0]);
    });
}));
authRouter.use(passport.initialize());
authRouter.use(passport.session());


authRouter.post('/login', passport.authenticate('local-login', {
    failureRedirect: '/#login', // redirect back to the signup page if there is an error
}),
    (req, res) => {
       res.json({key: '##dc$d1@%8'});
    });

//authRouter.use(flash());

export { authRouter, passport }