var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(pool) {
  router.get('/', function(req, res, next) {
    pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
      if (error) {
        throw error;
      }
      
      res.status(200).send(results.rows);
    });
  });

  return router;
}
