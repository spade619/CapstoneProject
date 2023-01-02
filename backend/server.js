// const path = require('path')
require('dotenv').config()
const express = require('express')
const  mongoose  = require('mongoose')
const userRoutes = require('./routes/user')
const profileRoutes = require('./routes/userProfile')
const campaignRoutes = require('./routes/campaign')
const cors = require('cors')
const User = require('./models/userModel')
const CreateRoom = require('./models/defaultChatRoomModel')

// const roomName='Test-Chat-Room2'
// const createDefaultRoom = async (req, res) => {
   
//     //add doc to db
//     try {
        
//         const createRoom = await CreateRoom.create({roomName})
//         res.status(200).json(createRoom)
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }

// createDefaultRoom()








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
//calls on the home page's default rooms
//const rooms = ['Server', 'Team', 'room1', 'room2']
app.get('/api/home', async (req, res) =>{  
    const rooms = await CreateRoom.find({})
    res.status(200).json(rooms)
})
//calls on the profile page
app.use('/api/profiles', profileRoutes)
//calls on the user login and signup routes 
app.use('/api/user', userRoutes )
//calls on the campaign page
app.use('/api/campaigns', campaignRoutes)
//app.use('/api/specific-campaign', campaignRoutes)






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

//server frontend
// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname, '../frontend/build')))

//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 
//     'frontend', 'build', 'index.html')))
// }else{
//     app.get('/', (req, res) => res.send('set to pruduction'))
//}





// socket.io server-------------------------------------------------------------------------------------------------------------

const server = require('http').createServer(app)

 const io = require('socket.io')(server, {
     cors: {
      origin:  'http://localhost:3000',
     methods: ['GET', 'POST']
    }
 })








//socket connection------------------------------------------------------------------------------------------------------

 io.on('connection', (socket) => {



     console.log(`user: ${socket.id} has connected`)
       
     CreateRoom.find().then(result => {
        io.emit('output-rooms', result)
     })
     
    
    socket.on('join_room', (userEmail, roomID) => {
        socket.join(roomID) 
       // 
        console.log(`user: ${userEmail} has joined room ${roomID}`)
        io.to(roomID).emit('recieve_users', userEmail)
        CreateRoom.updateOne({_id: roomID, }, {$push: {email: userEmail}}).then(results => {
            //socket.emit('recieve_users', results)
       // socket.to(roomID).emit('recieve_users', userEmail)
        })

        socket.on('disconnect', () => {
            console.log(`user: ${userEmail} has disconnected on room ${roomID} ` )
            CreateRoom.updateOne({_id: roomID, }, {$pull: {email: userEmail}}).then(resultss => {
               // io.emit('recieve_users', resultss)
           
            })
    
          })


    })
   // socket.to(data2._id)
    socket.on('send_users', (dataRoom) => {
      
    //  socket.emit('recieve_users', dataEmail)
        console.log(`room id sent is ${dataRoom} `)
        CreateRoom.findById(dataRoom).select('email').then(SearchResult => {
          
          //  socket.emit('recieve_users', SearchResult)
         })


        
    })

    //

    
   
 })



 //socket.io server
 server.listen(4001, () => {
    console.log('server is now online -Nel Infinity')
 })

// '*'