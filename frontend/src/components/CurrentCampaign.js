import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"



const CurrentCampaign = () => {
    const {id} = useParams()
    const [CampaignDetailsName, setCampaignDetailsName] = useState('')
    const [CampaignDetailsTitle, setCampaignDetailsTitle] = useState('')
    useEffect(() => {
        
    const fetchCampaignDetails = async () => {
        const Response= await fetch(`/api/campaigns/join/specific-campaign/${id}` )
        const Json = await Response.json()
      
  
        if(Response.ok){
        // const {name, title} = Json
       // setCampaignDetailsName(name)
     //   setCampaignDetailsTitle(title)
         console.log(Json)
        
        }
      }
  
      fetchCampaignDetails()
    })
    
    return(
        <div>
            <h2><strong>{`Campaign: ${CampaignDetailsTitle}`}</strong></h2>
            <br/>
             <h2>{`this is the current campaign page and 
         is created By ${CampaignDetailsName}`}</h2> 
        
        </div>
    )
}

export default CurrentCampaign
