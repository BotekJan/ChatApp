const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    from: mongoose.Types.ObjectId,
    time: Date,
    type: String
})

module.exports = mongoose.model('Notification', notificationSchema)