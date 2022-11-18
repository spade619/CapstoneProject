const express = require('express')
const  {
    createProfile,
    getProfile,
    updateProfile
} = require('../controllers/profileController')

const requireAuth = require('../middleware/requireAuth')



//setting up the profile page router


const router = express.Router()

router.use(requireAuth)

//GET -  gets the profile page of a logged in user along with its data from database
router.get('/', getProfile)

//POST- post all the profile information when user decides to update his profile page for the first time

router.post('/settings', createProfile)

//DELETE- fires when the settings page is clicked

router.delete('/:id', (req, res) => {
    res.json({mssg: ' profile info posted POST'})
    })

//UPDATE- fires when the settings page is clicked

router.patch('/:id', updateProfile)

module.exports = router