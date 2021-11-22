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

<<<<<<< HEAD
app.use('/chat', chatRoutes);
=======
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

>>>>>>> fdd6397ac54c1bdb39e0df9514c1fef80f0bd8f6
app.use('/auth', authRoutes);

module.exports = app;