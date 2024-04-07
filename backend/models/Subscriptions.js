const mongoose = require('mongoose');

const subscriptionsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lehgth: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model('Subscriptions', subscriptionsSchema);