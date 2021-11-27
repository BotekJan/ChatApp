const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const User = require('../models/user');
const uzivatel = require("../models/uzivatel");

router.post('/prihlasit', (req, res, next) => {
        
    bcrypt.hash(req.body.password, 10, (err, hash) =>{
        if (err){
            return res.status(500).json({
                error: err
            });
        } else{
            const user = new Use({
        _id: new mongoose.Types.ObjectId(),
        jmeno: req.body.jmeno, 
        nastaveni: req.body.nastaveni,
        password: hash
         });
        uzivatel
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