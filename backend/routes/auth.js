var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(pool) {
  router.post('/auth/login', async (req, res) => {
  })

  router.get('/auth/user', async (req, res) => {
    res.send({ ok: 'ok' })
  })

  router.post('/auth/register', async (req, res) => {
  })

  return router;
}
