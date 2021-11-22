const express = require('express');
const app = express();

const authRoutes = require('./api/routes/auth');
const chatRoutes = require('./api/routes/chat');

const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://brozovic_michal:' 
+ process.env.MONGO_ATLAS_PW + 
'@chatapp.wqbas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{
    useMongoClient: true
})

app.use('/chat', chatRoutes);
app.use('/auth', authRoutes);

module.exports = app;