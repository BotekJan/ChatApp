const mongoose = require('mongoose');

const uzivatelSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    jmeno: String,
    pratele: [],
    obrazek: String,
    nastaveni : {},
    password: { type: String, required: true}
})

module.exports = mongoose.model('Uzivatel', uzivatelSchema)