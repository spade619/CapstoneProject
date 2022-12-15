import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useNavigate } from 'react-router-dom'


function AllCampaignDetails({Allcampaigns}) {
  const [CampaignName, setCampaignName] = useState(null)
  let navigate = useNavigate()

 
  useEffect(() => {

    const fetchAllCampaigns = async () => {
      const userResponse= await fetch('/api/campaigns/join/' + Allcampaigns.user_id)
      const nameJson = await userResponse.json()
    

      if(userResponse.ok){
       const {_id, name} = nameJson
      setCampaignName(name)
       console.log(nameJson)
      
      }
    }

    fetchAllCampaigns()
 
  }, [])
  
 

  return (
   
    
    
     <div>
 

<Table striped>
   
<tbody>
  <tr>
  <Button variant="link" onClick={() => navigate(`specific-campaign/${Allcampaigns._id}`)}>
                                  <strong>{` Campaign Name:  ${Allcampaigns.title}`}</strong>  
                                  <p>{`created by:  ${CampaignName}`}</p>
                                  <p>{`created :  ${formatDistanceToNow(new Date(Allcampaigns.createdAt), {addSuffix: true})}`}</p>
 </Button>
     
  
  

  </tr>
  </tbody>
</Table>
</div>

  )
}

export default AllCampaignDetails

 {/* <div>
      {CampaignName && CampaignName.map((Campaignz) => (
  <p key = {Campaignz._id}>{Campaignz.name}</p>
 ))}
      </div> */}