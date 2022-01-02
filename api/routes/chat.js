const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/check-auth");
const Chat = require("../models/chat");
const Zprava = require("../models/zprava");

router.get("/", checkAuth, (req, res, next) => {
  Chat.find({ uzivatele: req.userData.jmeno })
  .then((response) => {
    return res.status(200).json({
      chats: response,
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ error: err });
  });
});

router.get("/messages", checkAuth, (req, res, next) => {
    Zprava.find({ chatId: req.body.chatId })
    .sort({
        casOdeslani: -1
    })
    .then((response) => {
      return res.status(200).json({
        messages: response,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  });

module.exports = router;
