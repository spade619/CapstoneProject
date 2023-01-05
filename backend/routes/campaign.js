const express = require('express')
const {createCampaign,
       getCampaigns,
       getCampaign,
       deleteCampaign,
       updateCampaign,
       getAllCampaigns,
       getUserName,
       CurrentCampaign} = require('../controllers/campaignController')
       const requireAuth = require('../middleware/requireAuth')


       const router = express.Router()
       router.get('/api/getUser/:id', async (req, res) =>{  
              const UID=req.params.id
              const userzs = await User.findById(UID).select('email')
              res.status(200).json(userzs)
          })
       router.get('/join', getAllCampaigns)
       router.get('/join/:id', getUserName)
       router.get('/join/specific-campaign/:id', CurrentCampaign)
       
//DELETE user's campaign 
router.delete('/:id', deleteCampaign)
      
router.use(requireAuth)


//GET  user's created campaign 
router.get('/', getCampaigns)


//POST user's new campaign
router.post('/create', createCampaign)






//UPDATE  user's specific campaign 
router.patch('/:id', updateCampaign)

//-----------------------------------------------------


//GET all campaigns created to be joined - database logic


//POST join a specific campaign database logic
// router.post('join/:id', () => {

// })

module.exports = router


