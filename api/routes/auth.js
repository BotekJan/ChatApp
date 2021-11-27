const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Uzivatel = require("../models/uzivatel");

router.post("/usernameExists", (req, res, next) => {
    Uzivatel.findOne({jmeno: req.body.jmeno})
        .then((jmeno) => {
            if (jmeno) {
                return res.status(200).json({
                    message: "User exists",
                    usernameExists: true
                })
            }
            return res.status(404).json({
                message: "User does not exist",
                usernameExists: false
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

    router.post('/register', (req, res, next) => {
        
        bcrypt.hash(req.body.password, 10, (err, hash) =>{
            if (err){
                return res.status(500).json({
                    error: err
                });
            } else{
                const user = new Uzivatel({
            _id: new mongoose.Types.ObjectId(),
            jmeno: req.body.jmeno, 
            nastaveni: req.body.nastaveni,
            password: hash
             });
            user
            .save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Uživatel vytvořen'
                })
            })
            .catch(err =>{
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
            }
        });
        
    });
    

    module.exports = router;
