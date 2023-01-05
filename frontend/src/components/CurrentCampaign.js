import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"



const CurrentCampaign = () => {
    const {id} = useParams()
    const [CampaignDetailsName, setCampaignDetailsName] = useState('')
    const [CampaignDetailsTitle, setCampaignDetailsTitle] = useState('')
    const [jsonDetail, setjsonDetail] = useState('')
    useEffect(() => {
        
    const fetchCampaignDetails = async () => {
        const Response= await fetch(`/api/campaigns/join/specific-campaign/${id}` )
        const Json = await Response.json()
      
  
        if(Response.ok){
        // const {name, title} = Json
       // setCampaignDetailsName(name)
        setCampaignDetailsTitle(Json.title)
        setjsonDetail(Json.user_id)
        
        
        }
      }
  
      fetchCampaignDetails()

    })




    const [CampaignName, setCampaignName] = useState(null)
    
  
   
    useEffect(() => {
  
      const fetchAllCampaigns = async () => {
        const userResponse= await fetch(`/api/getUser/${jsonDetail}`)
        const nameJson = await userResponse.json()
      
  
        if(userResponse.ok){
         const {_id, name} = nameJson
        setCampaignName(name)
         console.log(name)
        
        }
      }
  
      fetchAllCampaigns()
   
    }, [])
    
    return(
        <div>
            <h2><strong>{`Campaign: ${CampaignDetailsTitle}`}</strong></h2>
            <br/>
             <h2>this is the page for your advertisements, proposals and campaigns 
         and this page</h2> 
        
        </div>
    )
}

export default CurrentCampaign
