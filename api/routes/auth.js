const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const uzivatel = require("../models/uzivatel");

router.post("/uzivatelnameExists", (req, res, next) => {
  uzivatel.findOne({ jmeno: req.body.jmeno })
    .then((jmeno) => {
      if (jmeno) {
        return res.status(200).json({
          message: "uzivatel exists",
          uzivatelnameExists: true,
        });
      }
      return res.status(200).json({
        message: "uzivatel does not exist",
        uzivatelnameExists: false,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/register", (req, res, next) => {
  uzivatel.find({ jmeno: req.body.jmeno })
    .exec()
    .then((uzivatel) => {
      if (uzivatel.length >= 1) {
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
            const uzivatel = new uzivatel({
              _id: new mongoose.Types.ObjectId(),
              jmeno: req.body.jmeno,
              nastaveni: req.body.nastaveni,
              password: hash,
            });
            uzivatel
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
  uzivatel.find({ jmeno: req.body.jmeno })
    .exec()
    .then((uzivatel) => {
      if (uzivatel.length >= 1) {
        return res.status(401).json({
          message: "Jméno nenalezeno",
        });
      }
      bcrypt.compare(req.body.password, uzivatel[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Špatné jméno nebo heslo",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              jmeno: uzivatel[0].jmeno,
              uzivatelId: uzivatel[0]._id,
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

router.delete("/uzivatelId", (req, res, next) => {
  uzivatel.remove({ _id: req.params.uzivatelId })
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
