var express = require("express");
var bodyParser = require("body-parser");


// Set up Express App
var app = express();
var PORT = 3000;

// Set up the Express App to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Get routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server to begin listening
app.listen(PORT, function() {
	console.log("app listening on PORT " + PORT);
});