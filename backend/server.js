require('dotenv').config()
const express = require('express')
const  mongoose  = require('mongoose')
const userRoutes = require('./routes/user')
const profileRoutes = require('./routes/userProfile')
const campaignRoutes = require('./routes/campaign')
const cors = require('cors')
const Message = require('./models/messageModel')
const User = require('./models/userModel')

//chat rooms
const rooms = ['Server', 'Team', 'room1', 'room2']





// express app created
const app = express()

//to handle data request on frontend
 app.use(express.urlencoded({ extended: true }))


//middleware invoke- it looks if the req has a body and then parse in json data
app.use(express.json())


//cross origin resource sharing invoke
 app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
   
    next()
})


//handle ROUTES REQUEST made from by the frontend
//calls on the profile page
app.use('/api/profiles', profileRoutes)
//calls on the user login and signup routes 
app.use('/api/user', userRoutes )
//calls on the campaign page
app.use('/api/campaigns', campaignRoutes)






//connect to database -------------------------------------------------------------------------------------------------------
mongoose.connect(process.env.MONGO_URI)

.then(() => {
console.log('connected to db')
//listen for request any request made by the frontend
app.listen(process.env.PORT, () => {
    console.log(' listening on port', process.env.PORT)
})
})

.catch((error) => {
    console.log('somethings wrong', error)
    console.log('connection unsuccessful')
})



// socket.io server-------------------------------------------------------------------------------------------------------------

const server = require('http').createServer(app)

 const io = require('socket.io')(server, {
     cors: {
      origin: 'http://localhost:3000',
     methods: ['GET', 'POST']
    }
 })





//this will get all the messages and current conversation of a single room
async function getLastMessageFromRoom(room){
let roomMessages = await Message.aggregate([
    {$match: {to: room}},
    {$group: {_id: '$date', messagesByDate: {$push: '$$ROOT'}}}
])
return roomMessages
}

function sortRoomMessagesByDate(messages){
    return messages.sort(function(a, b){
        let date1 = a._id.split('/')
        let date2 = b._id.split('/')

        date1 = date1[2] + date1[0] + date1[1]
        date2 = date2[2] + date2[0] + date2[1]

        return date1 < date2 ? -1 : 1
    })
}



//socket connection------------------------------------------------------------------------------------------------------

 io.on('connection', (socket) => {
     console.log(`user connected: ${socket.id}`)
    

    

     socket.on('new-user', async () => {
        const members = await User.find()
        io.emit('new-user', members)
    })
    


    socket.on('join-room', async(room) => {
        socket.join(room)
        let roomMessages = await getLastMessageFromRoom(room)
        roomMessages = sortRoomMessagesByDate(roomMessages)
        socket.emit('room-messages', roomMessages)
    })

    socket.on('message-room', async(room, content, sender, time, date) => {
        console.log('new message', content)
        const newMessage = await Message.create({content, from: sender, time, date, to: room})
        let roomMessages = await getLastMessageFromRoom(room)
        roomMessages = sortRoomMessagesByDate(roomMessages)
        //send message to room
        io.to(room).emit('room-messages', roomMessages)

        //send notification to a room
        socket.broadcast.emit('notifications', room)
    })
 




     socket.on('send_back', (data) => {
        socket.emit(data)

     })

     socket.on('send_message', (data) => {
          socket.to(data.room).emit('recieve_message', data)
     })
     

   socket.on('disconnect', () => {
         console.log('user disconnected', socket.id)
     })
   
   
   
 })


 app.get('/rooms', (req, res) =>{
    res.json(rooms)
})

 //socket.io server
 server.listen(4001, () => {
    console.log('server is now online -Nel Infinity')
 })

