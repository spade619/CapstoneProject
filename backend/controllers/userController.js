const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//create the token
const createToken = (_id) => {
    //and then returns the token
   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
}



//login user
const loginUser = async (req, res) => {
    const {name, email, password, _id} = req.body

    
    try {
        //request for the email and password on database
        const user = await User.login(name, email, password, _id)
       
        //gives a token to the user if logged in successfully 
        const token = createToken(user._id)
           
        res.status(200).json({name, email, token, _id})
            
     //catch any error during registration and sends an error message with a status code
    }catch (error) {
        res.status(400).json({error: error.message})
    }
  
    
}

//signup user (register)

const signupUser = async (req, res) => {
    const {name, email, password} = req.body 

    try {
        const user = await User.signup(name, email, password)
       
        //creates a token if user is successfully registered
        const token = createToken(user._id)
        res.status(200).json({name, email, token})
        
     //catch any error during registration and sends an error message with a status code
    }catch (error) {
        res.status(400).json({error: error.message})
    }
  
}




module.exports = {
    signupUser,
    loginUser
}