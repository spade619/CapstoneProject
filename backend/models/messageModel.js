const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MessagesSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
    room_id: {
        type: String,
        required: true
    }

 

}, { timestamps: true })

module.exports = mongoose.model('Messages', MessagesSchema)
