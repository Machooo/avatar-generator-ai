const mongoose = require('mongoose');
const bcrypt = require('mongoose-bcrypt');
const Subscriptions = require('./Subscriptions');


const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, bcrypt: true },
    name: { type: String, required: false },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    subscription: { type: mongoose.Schema.Types.ObjectId, ref: Subscriptions }
});

userSchema.plugin(bcrypt);

module.exports = mongoose.model('User', userSchema);