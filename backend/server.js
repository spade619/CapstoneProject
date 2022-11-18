require('dotenv').config()
const express = require('express')
const  mongoose  = require('mongoose')
const userRoutes = require('./routes/user')
const profileRoutes = require('./routes/userProfile')


// express app created
const app = express()


//middleware invoke
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//to handle routes request made from by the frontend
//calls on the profile page
app.use('/api/profiles', profileRoutes)
//calls on the user login and signup routes 
app.use('/api/user', userRoutes )
//calls on the home page





//connect to database
mongoose.connect(process.env.MONGO_URI)

.then(() => {
console.log('connected to db')
//listen for request any request made by the frontend
app.listen(process.env.PORT, () => {
    console.log(' listening on port', process.env.PORT)
})
})

.catch((error) => {
    console.log(error)
    console.log('connection unsuccessful')
})
