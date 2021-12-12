const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const user = require("../models/uzivatel");

router.post("/usernameExists", (req, res, next) => {
  user.findOne({ jmeno: req.body.jmeno })
    .then((jmeno) => {
      if (jmeno) {
        return res.status(200).json({
          message: "user exists",
          usernameExists: true,
        });
      }
      return res.status(200).json({
        message: "user does not exist",
        usernameExists: false,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/register", (req, res, next) => {
  user.find({ jmeno: req.body.jmeno })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Jmeno existuje",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new user({
              _id: new mongoose.Types.ObjectId(),
              jmeno: req.body.jmeno,
              nastaveni: req.body.nastaveni,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "Uživatel vytvořen",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
});

router.post("/login", (req, res, next) => {
  user.find({ jmeno: req.body.jmeno })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Jméno nenalezeno",
          length: user.length
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Špatné jméno nebo heslo",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              jmeno: user[0].jmeno,
              userId: user[0]._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Přihlášení úspěšné",
            token: token,
          });
        }
        return res.status(401).json({
          message: "Přihlášení selhalo",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/userId", (req, res, next) => {
  user.remove({ _id: req.params.userId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Uživatel byl smazán",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = router;
