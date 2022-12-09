import React from 'react'
import { Button, Table } from 'react-bootstrap'

function AllCampaignDetails({Allcampaigns}) {

  return (
   
    <div>  
   
<Table striped>
   
<tbody>
  <tr>
  <Button variant="link"><strong>{Allcampaigns.title}</strong></Button>
    

  </tr>
  </tbody>
</Table>
</div>
  )
}

export default AllCampaignDetails