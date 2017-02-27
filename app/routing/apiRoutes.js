var friends = require("../data/friends");

console.log("HERE: " + friends);

module.exports = function(app) {
	// API GET requests
	app.get("/api/friends", function(req, res) {
        console.log("apiRoutes" + friends);
		res.json(friends);
	});

	// API POST request
	app.post("/api/friends", function(req, res) {
		// compatibility logic goes here
        console.log(req.body);
        var userGrade = req.body.grade;
        // empty array to hold results to pass back to html
        // used to account for multiple matches
        var resultsArray = [];
        // loop through friends and find matches and put into resultsArray
        for (var i = 0; i < friends.length; i++) {
          if (userGrade == friends[i].grade) {
            resultsArray.push(friends[i]);
          };
        };
        res.json(resultsArray);
	});
};