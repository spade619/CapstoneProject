const express = require('express')
const {createCampaign,
       getCampaigns,
       getCampaign,
       deleteCampaign,
       updateCampaign,
       getAllCampaigns} = require('../controllers/campaignController')
       const requireAuth = require('../middleware/requireAuth')


       const router = express.Router()
       router.get('/join', getAllCampaigns)
      
router.use(requireAuth)

//GET  user's created campaign 
router.get('/', getCampaigns)


//POST user's new campaign
router.post('/create', createCampaign)



//DELETE user's campaign 
router.delete('/:id', deleteCampaign)



//UPDATE  user's specific campaign 
router.patch('/:id', updateCampaign)

//-----------------------------------------------------


//GET all campaigns created to be joined - database logic


//POST join a specific campaign database logic
router.post('join/:id', () => {

})

module.exports = router


