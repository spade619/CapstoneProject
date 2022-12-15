import React from 'react'
import { useEffect, useState } from 'react'
import AllCampaignDetails from '../components/AllCampaignDetails'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
function JoinCampaign() {

    const [Allcampaigns, setAllCampaigns] = useState(null)
   

        useEffect(() => {
      
            const fetchAllCampaigns = async () => {
                const response = await fetch('/api/campaigns/join')
                const json = await response.json()

              
                
                if(response.ok){
                    setAllCampaigns(json)
                 
                  //  console.log(json)
                }
            }
        
        
        //feth all campaigns
            fetchAllCampaigns()
        
        }, [])
        
  

  return (
  
    <div>
        
        <LinkContainer to="/campaigns">
     <Button variant="primary" type="submit" >
            prev
    </Button>
     </LinkContainer> 

     <h1><strong>Join a Campaign</strong></h1>
       
       {Allcampaigns && Allcampaigns.map((Allcampaigns) => (                           
     <AllCampaignDetails  Allcampaigns={Allcampaigns} key = {Allcampaigns._id} />
                ))}
     
              
    </div>
  )
}

export default JoinCampaign