///<reference path="../typings/globals/express-session/index.d.ts"/>

import * as express from "express";
import * as session from "express-session";
import { join } from "path";
import * as favicon from "serve-favicon";
import { json, urlencoded } from "body-parser";
import { loginRouter } from "./routes/login";
import { protectedRouter } from "./routes/protected";
import { users } from './api/users/users';
import { questions } from './api/questions/questions';
import { subjects } from './api/subjects/subjects';
import { authRouter } from './routes/passport' ;
import { mailer } from './api/mailer/send-mail';
import { secret } from './config'

const app: express.Application = express();
app.disable("x-powered-by");

app.use(favicon(join(__dirname, "../public", "favicon.ico")));
app.use(express.static(join(__dirname, '../public')));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true
}));

// Registering API Routes
app.use("/api", authRouter);
app.use("/login", loginRouter);
app.use('/users', users);
app.use('/questions', questions);
app.use('/subjects', subjects);
app.use('/mailer', mailer);

app.use('/client', express.static(join(__dirname, '../client')));

// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {

    app.use(express.static(join(__dirname, '../node_modules')));
    app.use(express.static(join(__dirname, '../tools')));

    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }
