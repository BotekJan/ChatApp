const express = require('express');
const app = express();

var cors = require('cors');


const authRoutes = require('./api/routes/auth');
const chatRoutes = require('./api/routes/chat');

const mongoose = require('mongoose');

app.use(cors());


mongoose.connect('mongodb+srv://brozovic_michal:' 
+ process.env.MONGO_ATLAS_PW + 
'@chatapp.wqbas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{
    useMongoClient: true
})

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

app.use('/auth', authRoutes);

module.exports = app;