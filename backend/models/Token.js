const mongoose = require("mongoose");
const config = require("./../config/auth");
const { v4: uuidv4 } = require('uuid');
const User = require('./User');

const RefreshTokenSchema = new mongoose.Schema({
  token: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  expireAt: Date,
});

RefreshTokenSchema.statics.createToken = async function (user) {
  let expiredAt = new Date();

  expiredAt.setSeconds(
    expiredAt.getSeconds() + config.jwtRefreshExpiration
  );

  let _token = uuidv4();

  let _object = new this({
    token: _token,
    user: user._id,
    expireAt: expiredAt.getTime(),
  });

  console.log(_object);

  let refreshToken = await _object.save();

  return refreshToken.token;
};

RefreshTokenSchema.statics.verifyExpiration = (token) => {
  return token.expireAt.getTime() < new Date().getTime();
}

const RefreshToken = mongoose.model("RefreshToken", RefreshTokenSchema);

module.exports = RefreshToken;