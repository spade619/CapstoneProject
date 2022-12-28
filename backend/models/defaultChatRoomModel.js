const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const DefaultRoomSchema = new Schema({
    roomName: {
        type: String,
       
    },
   // members: [{type: mongoose.Types.ObjectId, ref: 'User'}]
   email: [{
        type: String
   }]
    
})

module.exports = mongoose.model('DefaultChat', DefaultRoomSchema)

