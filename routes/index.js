//require dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//use API routes
router.use("/api", apiRoutes);
console.log("I am inside the index.js of routes folder!");

//if no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = router;
