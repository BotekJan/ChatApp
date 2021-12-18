const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if(!req.headers.Authorization){
        return res.status(401).send('Unauthorized request')
    }
    try {
        const token = req.headers.Authorization.split(" ")[1];
        if(token === 'null'){
            return res.status(401).send('Unauthorized request')
        }
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        if(!payload){
            return res.status(401).send('Unauthorized request')
        }
        req.userData = decoded;
        next();
    } catch (error){
        return res.status(401).json({
            message: 'Auth failed',
            err: error
        })
    }
}
