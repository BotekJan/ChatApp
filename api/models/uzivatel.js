const mongoose = require('mongoose');
const Notification = require('./notification')

const uzivatelSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    jmeno: String,
    pratele: [],
    obrazek: String,
    nastaveni : {},
    password: { type: String, required: true},
    notification: []
})

module.exports = mongoose.model('Uzivatel', uzivatelSchema)