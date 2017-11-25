const router = require("express").Router();
const savedArticlesRoutes = require("./savedArticles");

//saved articles routes
router.use("/saved", savedArticlesRoutes);

module.exports = router;