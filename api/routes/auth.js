const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message:'Hadling GET requests to /products'
    });
});


router.post('/', (req, res, next) =>{
    res.status(200).json({
        message:'Hadling POST requests to /products'
    });
});

router.patch('/authenId', (req, res, next) =>{
    res.status(200).json({
        message:'Update'
    });

});

router.delete('/authenId', (req, res, next) =>{
    res.status(200).json({
        message:'Delete'
    });
});


module.exports = router;