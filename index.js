var express = require('express');
var connectDB = require('./config/connectDB');
var contactModel = require('./models/contact.model');

let app = express();

connectDB();

app.get("/test-database", async (req, res) => {
	try {
		let item = {
		userId: "String",
		contactId: "Stringt"
	};
	let contact = await contactModel.createNew(item);
	res.send(contact);
	} catch (err) {
		console.log(err);
	}
})

app.listen(process.env.APP_PORT, function() {
	console.log('Server listening on port' + process.env.APP_PORT);
})