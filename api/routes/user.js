const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const checkAuth = require("../middleware/check-auth")

router.get("/", checkAuth, (req, res, next) => {
    Uzivatel.findOne({ _id: req.decoded._id })
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

module.exports = router;
