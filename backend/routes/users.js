var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send('Users')
});

router.get("/:id", function (req, res, next) {
  const id = parseInt(req.params.id);

  res.send('User page - ' + id)
});

module.exports = router;
