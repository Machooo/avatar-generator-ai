const express = require("express");
const env = require("dotenv");
const router = express.Router();
const userController = require('./../controllers/userController')

/**
 * @openapi
 * /api/user:
 *   get:
 *     summary: Get all users
 *     description: Returns a list of all users.
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get("/", function (req, res, next) {
  res.send('Users')
});

/**
 * @openapi
 * /api/user/admin:
 *   post:
 *     summary: Create an admin user
 *     description: Creates a new admin user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email of the admin user
 *               password:
 *                 type: string
 *                 description: Password of the admin user
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post('/create', async (req, res) => {
  try {
    const user = await createUser('', '');
    res.json(user)
  } catch (err) {
    console.error("Error creating user", err.message);
    res.status(500).json({ error: "Error creating user" });
  }
});

router.post('/login', userController.login);
router.post("/login/refreshtoken", userController.refreshToken);

module.exports = router;
