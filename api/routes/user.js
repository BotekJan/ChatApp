const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const checkAuth = require("../middleware/check-auth")
const Uzivatel = require("../models/uzivatel");

router.get("/", checkAuth, (req, res, next) => {
    Uzivatel.findOne({ _id: req.userData.userId })
      .then((user) => {
        if (user) {
          return res.status(200).json({
            User: user
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
    Uzivatel.find({ jmeno: RegExp('^.*'+ req.body.filter +'.*$')}, {jmeno: req.userData.jmeno})
      .then((user) => {
        if (user) {
          return res.status(200).json({
            Users: user
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
