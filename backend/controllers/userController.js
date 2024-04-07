const User = require("./../models/User");
const RefreshToken = require("./../models/Token");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("./../config/auth");

exports.createUser = async (req, res) => {
  // if (!email || !password) {
  //   throw new Error("Email and password are required");
  // }
  // const isUserExist = await User.findOne({ email });
  // if (isUserExist) {
  //   throw new Error("User already created");
  // }
  // if (password.length < 6) {
  //   throw new Error("Password is too short");
  // }
  // await User.create({
  //   email,
  //   password,
  //   name,
  //   role: "user",
  // })
  //   .then((user) => {
  //     return user;
  //   })
  //   .catch((err) => {
  //     throw new Error(err);
  //   });
};

exports.changePassword = async (req, res) => {};

exports.remindPassword = async (req, res) => {};

exports.login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ error: "Email and Password are required!" });
    }
    
    User.findOne({
      email: req.body.email,
    }).then(async (user) => {
      if (!user) {
        return res.status(400).json({ error: "Invalid Email or Password!" });
      }

      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

      if (!passwordIsValid) {
        return res.status(400).json({ error: "Invalid Username or Password!" });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: config.jwtExpiration,
      });

      const refreshToken = await RefreshToken.createToken(user);

      return res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email,
        accessToken: token,
        refreshToken,
      })
    });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || "Login failed" });
  }
};

exports.logout = async (req, res) => {};

exports.setSubscription = async (req, res) => {};

exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ token: requestToken });

    if (!refreshToken) {
      return res.status(403).json({ message: "Refresh token is not in database!" });
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.findByIdAndRemove(refreshToken._id, { useFindAndModify: false }).exec();
      
      return res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
    }

    let newAccessToken = jwt.sign({ id: refreshToken.user._id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};