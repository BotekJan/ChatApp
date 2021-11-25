const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Uzivatel = require("../models/uzivatel");

router.post("/usernameExists", (req, res, next) => {
    Uzivatel.findOne({jmeno: req.body.jmeno})
        .then((jmeno) => {
            if (jmeno) {
                return res.status(200).json({
                    message: "User exists"
                })
            }
            return res.status(404).json({
                message: "User does not exist"
            });

        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.post("/register", (req, res, next) => {
    const novyUzivatel = new Uzivatel({
        _id: mongoose.Types.ObjectId(),
        jmeno: req.body.jmeno,
        pratele: [],
        obrazek: 'default',
        nastaveni: {}
    })
    novyUzivatel.save().then(result => {
        res.status(201).json({
            message: 'User succesfully created',
            user: result,
        })
    }).catch((err) => {
        res.status(500).json({ error: err });


    });
})

    router.post("/login", (req, res, next) => {
        res.status(200).json({
            message: "Hadling GET requests to /products",
        });
    });

    module.exports = router;
