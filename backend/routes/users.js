var express = require("express");
var router = express.Router();

/* GET users listing. */
module.exports = function (pool) {
  router.get("/", function (req, res, next) {
    pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).send(results.rows);
    });
  });

  router.get("/:id", function (req, res, next) {
    const id = parseInt(req.params.id);

    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rowCount === 0) {
        return res.status(404).send({
          error: 'User not found',
          statusCode: 404
        });
      }

      return res.status(200).send(results.rows[0]);
    });
  });

  return router;
};
