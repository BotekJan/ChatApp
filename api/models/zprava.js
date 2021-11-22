const mongoose = require('mongoose');

const zpravaSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    chatId: mongoose.Types.ObjectId,
    uzivatelId: mongoose.Types.ObjectId,
    obsah: String,
    casOdeslani: Date
})

module.exports = mongoose.model('zprava', zpravaSchema)