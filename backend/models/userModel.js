const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')


const Schema = mongoose.Schema

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        //prevents the user from using the same email upon registration
        unique: true
    },

    password: {
        type: String,
        required: true
    }

   

}, {timestamps: true})

//static signup method (Registration)
  userSchema.statics.signup = async function(name, email, password) {
    //validation to check if user has an input value for email and password
    if(!name || !email || !password) {
        throw Error('all fields must be filled')
    }
    //if user doesent put a valid email format
    if(!validator.isEmail(email)){
        throw Error ('email is not valid')
    }

    //if password is not strong enough(uppercase,lowercase,symbols and numbers required)
   // if(!validator.isStrongPassword(password)){
  //    throw Error('password is not strong enough')
  //  }
    
    
    //another check-up to prevent user from registering the same email
    const exists = await this.findOne({email})
    if(exists) {
        throw Error('this Email is already in used')
    }
        //hashing the password to become encrypted
        const salt = await bcrypt.genSalt(5)
        const hash = await bcrypt.hash(password, salt)

        //creates all the given schema objects on the database
        const user = await this.create({name, email, password: hash})

        
    //return all the given data when registration is success
     
            return user
            
        
  }



  //static login method (User Log-In)

  userSchema.statics.login = async function (email, password){

     //check if user has an input value for email and password
     if(!email || !password) {
        throw Error('all fields must be filled')
    }
    //checks the given email on the database
    const user = await this.findOne({email})
   
   // req.user = await this.findOne({_id}).select('_id')
    //throws an error and sends a message if the given email  cannot be found on the database
    if(!user) {
        throw Error('Unregistered Email')
    }

    //gets the name from database using email
    const Uname = await this.findOne({email}).select('name')
    //gets the id 
    const Uid = await this.findOne({email}).select('_id')
    //checks the given password on the hashed password on the database 
    const match = await bcrypt.compare(password, user.password)
    //if password doesent match on the database throws an error and sends a message 
    if(!match) {
        throw Error('Password Incorrect')
    }

    //returns when everything is a success - to be used for logging in
    return (user, Uname, Uid)
    
  }
module.exports = mongoose.model('User', userSchema)