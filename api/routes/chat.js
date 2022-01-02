const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

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
      casOdeslani: -1,
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

router.post("/sendMessage", checkAuth, (req, res, next) => {
  let zprava = new Zprava({
    _id: new mongoose.Types.ObjectId(),
    chatId: req.body.chatId,
    uzivatelId: req.userData._id,
    obsah: req.body.message,
    casOdeslani: Date()
  })

  zprava.save()
  .then(() => {
    res.status(200).json({
      message: "message was sent"
    })
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ error: err });
  });
});

module.exports = router;
