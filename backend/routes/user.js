const express = require("express");
const router = express.Router();
const userController = require('./../controllers/userController')
const { verifyToken } = require('./../middleware/auth');

router.use(function(req, res, next) {
  res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get('/', userController.test)

// router.post('/create', async (req, res) => {
//   try {
//     const user = await createUser('', '');
//     res.json(user)
//   } catch (err) {
//     console.error("Error creating user", err.message);
//     res.status(500).json({ error: "Error creating user" });
//   }
// });

router.post('/login', userController.login);
router.post("/login/refreshtoken", [verifyToken], userController.refreshToken);

module.exports = router;
