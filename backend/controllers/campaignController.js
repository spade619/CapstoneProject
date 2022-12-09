const   mongoose  = require('mongoose')
const Campaign = require('../models/campaignModel')



//get all campaigns
const getCampaigns = async (req, res) => {
    try{

        const user_id = req.user._id
    const campaigns = await Campaign.find({user_id}).sort({createdAt: -1})
    res.status(200).json(campaigns)
} catch (error) {
        res.status(404).json({error: error.message})
        console.log(error)
        
    }
    

    
}

//get all campaigns
const getAllCampaigns = async (req, res) => {
   

    const campaigns = await Campaign.find({}).sort({createdAt: -1})
    res.status(200).json(campaigns)


    
}





//get a single campaign
const getCampaign = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Campaign existed'})
    }
    const campaign = await Campaign.findById(id)

    if(!campaign) {
        return res.status(404).json({error: 'No Campaign exists'})
    }
    res.status(200).json(campaign)
}




//create a new campaign
const createCampaign = async (req, res) => {
    const {title} = req.body
    //add doc to db
    try {
        const user_id = req.user._id
        const campaign = await Campaign.create({title, user_id})
        res.status(200).json(campaign)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}




//delete a campaign
const deleteCampaign = async (req, res) => {
    const {id} = req.params

if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No Campaign existed'})
}

const campaign = await Campaign.findOneAndDelete({_id: id})
if(!campaign) {
    return res.status(404).json({error: 'No Campaign exists'})
}

res.status(200).json(campaign)

}




//update a campaign
const updateCampaign = async (req, res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Campaign existed'})
    }

    const campaign = await Campaign.findOneAndUpdate({_id: id}, {

        ...req.body
    })

    if(!campaign) {
        return res.status(404).json({error: 'No Campaign exists'})
    }
    
    res.status(200).json(campaign)
    
}


module.exports = {
    createCampaign,
    getCampaigns,
    getCampaign,
    deleteCampaign,
    updateCampaign,
    getAllCampaigns

}