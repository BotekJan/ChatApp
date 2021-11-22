const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    uzivatele: [],
    jmeno: String,
    obrazek: String,
})

module.exports = mongoose.model('Chat', chatSchema)