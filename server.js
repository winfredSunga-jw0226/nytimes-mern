//require dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const router = require("express").Router();
const PORT = process.env.PORT || 3001;
const app = express();

//configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku if production)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use('*', express.static('client/build'));
} 

//app.use(routes);

//set mongoose to leverage built-in JS ES6 Promises
mongoose.Promise = Promise;

//--------------- Database configuration with Mongoose -----------------------------
//--------------- Define local Mongo URI ------------------------
const databaseUri = "mongodb://localhost/mongoNYTArticles"
//------------------------------------------------------------------

if (process.env.MONGODB_URI) {
  //THIS EXECUTES IF THIS IS BEING EXECUTED IN THE HEROKU APP
  mongoose.connect(process.env.MONGODB_URI);
} else {
  // THIS EXECUTES IF THIS IS BEING EXECUTED ON YOUR LOCAL MACHINE
  mongoose.connect(databaseUri, {
    useMongoClient : true
  });
}

const db = mongoose.connection;

//show any mongoose errors
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

//once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

/*************
 == ROUTING ==
*************/
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
