const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const checkAuth = require("../middleware/check-auth");
const Notification = require("../models/notification");
const Uzivatel = require("../models/uzivatel");

router.get("/", checkAuth, (req, res, next) => {
  Uzivatel.findOne({ _id: req.userData.userId })
    .then((user) => {
      if (user) {
        return res.status(200).json({
          User: user,
        });
      }
      return res.status(200).json({
        message: "User does not exist",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/notifications", checkAuth, (req, res, next) => {
  Uzivatel.findOne({ _id: req.userData.userId })
    .select("notifications")
    .then((notif) => {
      if (notif) {
        return res.status(200).json({
          notifications: notif,
        });
      }
      return res.status(200).json({
        message: "User does not exist",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/filter", checkAuth, (req, res, next) => {
  Uzivatel.find({ jmeno: RegExp("^.*" + req.body.filter + ".*$") })
    .where({ _id: { $ne: req.userData.userId } })
    .then((user) => {
      if (user) {
        return res.status(200).json({
          Users: user,
        });
      }
      return res.status(200).json({
        message: "No users with this name",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/addFriend", checkAuth, (req, res, next) => {
  Uzivatel.updateOne(
    { jmeno: req.jmeno },
    {
      $push: {
        notification: new Notification({
          _id:  new mongoose.Types.ObjectId()(),
          from: req.userData.jmeno,
          time: Date(),
          type: "friend-request",
        }),
      },
    }
  )

    .then((user) => {
      if (user) {
        return res.status(200).json({
          message: "friend request send",
        });
      }
      return res.status(200).json({
        message: "No users with this name",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
