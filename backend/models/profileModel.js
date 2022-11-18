const mongoose = require('mongoose')

const Schema = mongoose.Schema


//creates a schema for the profile page
const profileSchema = new Schema({
    
    firstName: {
        type: String, 
       
       
    },

    lastName: {
        type: String,
        
      
    },

    age: {
        type: Number,
       
    },

    gender: {
        type: String,
       
        
    },

    country: {
        type: String,
       
    },

    job: {
        type: String,
        
    },

    user_id: {
        type: String,
        required: true
    }

})



module.exports = mongoose.model('Profile', profileSchema)