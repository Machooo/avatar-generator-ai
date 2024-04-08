const jwt = require("jsonwebtoken");
const config = require("./../config/auth");
const db = require("./../models/User");

const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }

  return res.sendStatus(401).send({ message: "Unauthorized!" });
};

/**
 * Middleware to verify the access token in the request headers
 */
const verifyToken = (req, res, next) => {
  // Extract the token from the request headers
  const token = req.headers["x-access-token"];

  // If no token is provided, send a 403 status with an error message
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  // Verify the token using the secret key and handle any errors
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return catchError(err, res); // Call the error handling function
    }
    req.userId = decoded.id; // Set the userId in the request object
    next(); // Call the next function in the middleware chain
  });
};

module.exports = {
  verifyToken
}