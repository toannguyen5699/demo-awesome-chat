var express = require('express');
var authController = require("./../controllers/authController");
var homeController = require("./../controllers/homeController");

let router = express.Router();

/**
 * Init all routes
 * @param app from exactly express module
 */
let initRoutes = (app) => {
	router.get("/", homeController.getHome);
	router.get("/login-register", authController.getLoginRegister);
	
	return app.use("/", router);
};

module.exports = initRoutes;

