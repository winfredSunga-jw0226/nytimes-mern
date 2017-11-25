const router = require("express").Router();
const savedArticlesController = require("../../controllers/savedArticlesController");

//matches with "api/saved"
router.route("/")
  .get(savedArticlesController.findAll)
  .post(savedArticlesController.create)
  .delete(savedArticlesController.remove);

module.exports = router;