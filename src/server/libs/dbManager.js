"use strict";
/// <reference path="../../../typings/index.d.ts" />
var config_1 = require("../config");
var mysql = require('mysql');
var connection = mysql.createConnection(config_1.dbConfigs);
;
/**
 * This class is a middleware to interact with the database
 * All the database interactions should handled through this class
 */
var DBManager = (function () {
    function DBManager() {
    }
    DBManager.prototype.executeQuery = function (query) {
        connection.connect();
        connection.query(query, function (err, rows, fields) {
            if (err)
                throw err;
            console.log(rows);
        });
        connection.end();
    };
    return DBManager;
}());
exports.DBManager = DBManager;
var a = new DBManager();
a.executeQuery("select * from users");
