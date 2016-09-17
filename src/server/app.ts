/// <reference path="../../typings/index.d.ts" />
import * as express from "express";
import { join } from "path";
import { json, urlencoded } from "body-parser";
import * as favicon from "serve-favicon"

// import { authenticateRouter } from "./routes/authenticate";
// import { protectedRouter } from "./routes/protected"

let session = require('express-session');

const app: express.Application = express();
app.disable("x-powered-by");

app.use(favicon(join(__dirname, "../../client", "favicon.ico")));
app.use(express.static(join(__dirname, "../../client")));

app.use(json);
app.use(urlencoded({ extended: true }));
app.use(session({
    secret
}))