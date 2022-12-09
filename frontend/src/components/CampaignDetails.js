import React from 'react'
import {useCampaignsContext} from '../hooks/useCampaignContext'
import { Button, Table } from 'react-bootstrap'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function CampaignDetails({campaign}) {
    const {dispatch} = useCampaignsContext()
    const handleClick = async () => {
        //send delete request to server to delete a specific campaign
        const response = await fetch('/api/campaigns/' + campaign._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_CAMPAIGN', payload: json})
        }
    }

  return (
    <div>
    
    
   <Table striped>
   
      <tbody>
        <tr>
        <Button variant="link"><strong>{campaign.title}</strong></Button>

<p>{formatDistanceToNow(new Date(campaign.createdAt), {addSuffix: true})}</p>
<button className = "material-symbols-outlined" onClick={handleClick}>delete</button>

        </tr>
        </tbody>
    </Table>
    
    
    </div>



  )
}

export default CampaignDetails