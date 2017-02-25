var path = require("path");

// Routing
module.exports = function(app) {
	// HTML GET requests
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// If invalid route redirect to home
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};