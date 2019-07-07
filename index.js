var express = require('express');
var connectDB = require('./config/connectDB');
var configViewEngine = require("./config/viewEngine");

// initt app
let app = express();

// Connect to mongoDB
connectDB();

// Config view engine
configViewEngine(app);

app.get("/", (req, res) => {
	return res.render("main/master");
});

app.get("/login-register", (req,res) => {
	return res.render("auth/loginRegister");
});

app.listen(process.env.APP_PORT, function() {
	console.log('Server listening on port' + process.env.APP_PORT);
});