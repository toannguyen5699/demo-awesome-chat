var express = require('express');
var connectDB = require('./config/connectDB');
var configViewEngine = require("./config/viewEngine");
var initRoutes = require("./routes/web");
// initt app
let app = express();

// Connect to mongoDB
connectDB();

// Config view engine
configViewEngine(app);

// Init all routes
initRoutes(app);

app.listen(process.env.APP_PORT, function() {
	console.log('Server listening on port' + process.env.APP_PORT);
});