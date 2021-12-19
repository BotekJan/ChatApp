const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const checkAuth = require("../middleware/check-auth");
const Notification = require("../models/notification");
const Uzivatel = require("../models/uzivatel");
const Chat = require("../models/chat");

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
    .then((notif) => {
      if (notif) {
        return res.status(200).json({
          notifications: notif.notification,
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
  Uzivatel.findOneAndUpdate(
    { jmeno: req.body.jmeno },
    {
      $push: {
        notification: {
          _id: new mongoose.Types.ObjectId(),
          from: req.userData.jmeno,
          time: Date(),
          type: "friend-request",
        },
      },
    }
  )

    .then((user) => {
      if (user) {
        return res.status(200).json({
          usr: user,
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

router.post("/notificationAnswer", checkAuth, (req, res, next) => {
  Uzivatel.findOne({ _id: req.userData.userId })
    .then((user) => {
      if (user.notification.some((e) => e._id === req.body.notif._id)) {
        if (req.body.accept) {
          let chat = new Chat({
            _id: new mongoose.Types.ObjectId(),
            uzivatele: [req.userData.jmeno, req.body.notif.from],
            jmeno: req.userData.jmeno + ", " + req.body.notif.jmeno,
            obrazek: "",
          });

          chat.save();

          Uzivatel.findOneAndUpdate(
            { jmeno: req.userData.jmeno },
            { $push: { pratele: chat._id } }
          );
          Uzivatel.findOneAndUpdate(
            { jmeno: req.body.notif.jmeno },
            { $push: { pratele: chat._id } }
          );
          
          //remove notification from current user I hope
          Uzivatel.findOneAndUpdate(
            { jmeno: req.userData.jmeno },
            {
              $pull: {
                notification: req.body.notif,
              },
            }
          );


          return res.status(200).json({
            message: "new chat has been created",
          });
        } else {
          Uzivatel.findOneAndUpdate(
            { jmeno: req.userData.jmeno },
            {
              $pull: {
                notification: req.body.notif,
              },
            }
          );
          return res.status(200).json({
            message: 'friend request has been declined'
          })
        }
      }
      return res.status(200).json({
        message: "Notification doesnt exist",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
