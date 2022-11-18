const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


const requireAuth = async (req, res, next) => {
    
    //verify authentication
    const {authorization} = req.headers
    //check if user is authorized
    if (!authorization) {
        return res.status(400).json({error: 'Authorization token required'})
    }
    
    const token = authorization.split (' ') [1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        //fetch only the user id from the database 
        req.user = await User.findOne({_id}).select('_id')
        next()

    } catch (error) {
        console.log(error)
        res.status(400).json({error: 'request is not authorized'})
    }
}

module.exports = requireAuth