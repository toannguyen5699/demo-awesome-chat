var mongoose = require('mongoose');
var bluebird = require('bluebird');


let connectDB = () => {
	mongoose.Promise = bluebird;

	// mongodb://localhost:27017/appchat
	let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

	return mongoose.connect(URI, {useNewUrlParser: true});
};

module.exports = connectDB;