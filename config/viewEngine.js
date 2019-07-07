var express = require('express');
var expressEjsExtend = require('express-ejs-extend');

/**
 * Config view engine for app
 */
 let configViewEngine = (app) => {
 	app.use(express.static("./public"));
 	app.engine("ejs", expressEjsExtend);
 	app.set("view engine", "ejs");
 	app.set("views","./views");
 };

 module.exports = configViewEngine;