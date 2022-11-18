const Profile = require('../models/profileModel')
const mongoose = require('mongoose')

//get profile page
const getProfile =  async (req, res) =>  {
    const user_id = req.user.id
    const profiles = await Profile.find({user_id})
    //refference user profile by id when searching to the database
    //const {id} = req.params
    res.status(200).json(profiles)

   // if (!mongoose.Types.ObjectId.isValid(id)){
   //     return res.status(400).json({error: 'this user is not yet registered'})
  //  }

    //search for user profile based on the given id
 //   const profile = await Profile.findById(id)  
    
  
    // check if profile id is available throws error if user is not found
  //  if (!profile) {
 //       return res.status(400).json({error: 'cannot find user profile'})
  //  }

    //returns the  profile when found on the database
   // res.status(200).json(profile)
}



    //POST - create blank profile data
const createProfile = async () => {
    
    //pass-on the request to express.json body on server
     
      
  try {
      const user_id = req.user._id

      //creates the document on the database based on the given parameters
      const profile = await Profile.create({firstName, lastName, age, gender, country, job, user_id})
          //recieves the created data back in json format 
      res.status(200).json(profile)
  } catch (error) {
      //sends an error response with the current error
      res.status(400).json({error: error.message})
  }
  }




  //update a workout
const updateProfile = async (req, res) => {
    const {id} = req.params
    
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No profile exist'})
        }
    
        const profile = await Profile.findOneAndUpdate({_id: id}, {
            ...req.body
        })
    
        
        if (!workout) {
            return res.status(400).json({error: 'No profile exist'})
        }
    
        res.status(200).json(profile)
    }
  


module.exports = {
    createProfile,
    getProfile,
    updateProfile
}