const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



mongoose.connect(
  'mongodb+srv://botek:' 
  + 'janbotek' + 
  '@chatapp.wqbas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).catch(err => console.log(err));
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "options") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/user", require("./api/routes/user"));
app.use("/auth", require("./api/routes/auth"));
app.use("/chat", require("./api/routes/chat"));




//default route

app.get("/", (req, res, next) => {
  res.status(200).json({
      message: "This is an api for a chat app project",
      github: "https://github.com/BotekJan/ChatApp"
  });
});



//Error handeling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
