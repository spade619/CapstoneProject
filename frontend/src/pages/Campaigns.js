
import { useEffect, } from 'react'
import { Container, Button } from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap"
import CampaignDetails from '../components/CampaignDetails'
import { useCampaignsContext } from '../hooks/useCampaignContext'
import { useAuthContext } from '../hooks/useAuthContext'

const Campaigns = () => {
    const {campaigns, dispatch} = useCampaignsContext()
  
    const {user} = useAuthContext()
    

      useEffect(() => {
        const fetchCampaigns = async() => {
            const response = await fetch('/api/campaigns', {
                headers: {'Authorization': `Bearer ${user.token}`},
            })
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_CAMPAIGNS', payload: json})
            }
        }

     

        if(user){
           fetchCampaigns()
            
        }
        
    }, [dispatch, user])
 
    return (
        <div className="home">
           
                   
        <Container>
        <br/>
                  <br/>
                  <h1><strong>Bulletin Board</strong></h1>
                  <br/>
      <LinkContainer to="/campaigns/create">
    
      <Button><strong>Make a Post on the Bulletin Board</strong></Button>
            
                  </LinkContainer>
               
                

                  {campaigns && campaigns.map((campaign) => (                           
     <CampaignDetails key = {campaign._id} campaign={campaign} />
                ))}
              
                 

                  <br/>
                  <br/>
                  <br/>
                  <LinkContainer to="/campaigns/join">
       <Button><strong>View All Post/Advertisements</strong></Button>
                   </LinkContainer>

                 
    
        </Container>       
                
        </div>
    )
}

export default Campaigns