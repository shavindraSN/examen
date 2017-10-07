///<reference path="../../typings/globals/passport/index.d.ts"/>
///<reference path="../../typings/globals/passport-local/index.d.ts"/>
///<reference path="../../typings/globals/bcryptjs/index.d.ts"/>
///<reference path="../../typings/globals/mysql/index.d.ts"/>
///<reference path="../../typings/globals/connect-flash/index.d.ts"/>
///<reference path="../../typings/globals/jsonwebtoken/index.d.ts"/>

import { Router, Request, Response } from "express";
import * as passport from 'passport';
import * as session from 'express-session';
import * as localStrategy from "passport-local";
import * as bcrypt from 'bcryptjs';
import * as mysql from 'mysql';
import { sign } from 'jsonwebtoken';

var flash = require('connect-flash')

import { User } from '../../client/sharedClasses/user';
import { UserFunctions } from '../libs/api/user-functions';
import { DbConnector } from '../libs/common/db-connector';
import { dbConfig } from '../config';
import { secret } from '../config';

let LocalStrategy = localStrategy.Strategy;
let connection = mysql.createConnection(dbConfig);
const authRouter: Router = Router();

/**
 * Serialize the user details to persistent login session
 */
passport.serializeUser((user: User, done) => {
    console.log('Serializing user ', user.id);
    done(null, {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        email_verified: user.email_verified,
        district: user.district,
        userType: user.type,
        token: sign({id: user.id} , secret, {expiresIn: "7d"})
    });
});

/**
 * Deserialize user details from login session
 */
passport.deserializeUser((user, done) => {
    done(null, user);
});

/**
 * Login with Passport LocalStrategy
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
    }
);

/**
 * This route used to get user details that are saved in the session and fetch other details from 
 * database
 */
authRouter.get('/session', (request: any, response: Response) => {
    if(request.session.passport) {
        let userFunction = new UserFunctions();
        let dbConnector = new DbConnector();

        dbConnector.connectToDb((error, connection) => {
            if(error) {
                response.json({
                    err: error
                });
            }
            else {
                userFunction.getUser(request.session.passport.user.id, connection, data => {
                    if(data) {
                        return response.json(request.session.passport.user);
                    }
                    else {
                        return response.status(403).json({
                            message: 'user mismatch'
                        });
                    }
                });
            }
        });
    }
    else {
        return response.status(403).json({
            message: 'session expired'
        });
    }
});

/**
 * Delete session details. Use when user logout from the system
 */
authRouter.delete('/logout', (request: Request, response: Response) => {
    try {
        request.session.destroy(() => {
            return response.status(200).json({
                message: 'logout successfully'
            })
        })
    }
    catch (e) {
        return response.status(500).json({
            message: 'logout error'
        })
    }
})


//authRouter.use(flash());

export { authRouter, passport }