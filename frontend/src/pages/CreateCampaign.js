import React from 'react'
import { Col, Row, Container, Form, Button } from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap"
import {useState} from 'react'
import {useCampaignsContext} from '../hooks/useCampaignContext'
import { useAuthContext } from '../hooks/useAuthContext'
function CreateCampaign() {
  const { dispatch } = useCampaignsContext()
  const { user } = useAuthContext()
  // const [createCampaignButton, setcreateCampaignButton] = useState(false)

  //      const createCampaignButtonOn = () => setcreateCampaignButton(true)
  //      const createCampaignButtonOff = () => setcreateCampaignButton(false)
  
       const [title, setTitle] = useState('')
  const [error, setError] = useState(null)

  const handleClick= async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }
    const campaign = {title}

    const response = await fetch('/api/campaigns/create', {
      method: 'POST',
      body: JSON.stringify(campaign),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }

    })
    const json = await response.json()

    if(!response.ok) {
      setError(json.error)
      console.log('test')
    }
    if(response.ok) {
      setError(null)
      setTitle('')
      console.log('campaign added', json)
      
      dispatch({type: 'CREATE_CAMPAIGN', payload: json})
    }
  }

  return (

   

    <Container>
       
<Row>
   
    <Col md={7} className='d-flex align-items-center justify-content-center flex-directional-column'>
    <Form style={{width: '80%', maxWidth: 500}}>
        <h1>Create-Campaign</h1>


         
       
        <Form.Group className="mb-3" controlId="formBasicName">
        <LinkContainer to="/campaigns">
     <Button variant="primary" type="submit" >
            prev
    </Button>
     </LinkContainer> 
 
     
    <Form.Control type="text" placeholder="Enter Your Campaign Title" 
    onChange={(e) => setTitle(e.target.value)}
     value ={title} />
    </Form.Group>


    <LinkContainer to="/campaigns" onClick={handleClick}>
    <Button >
            Submit
    </Button>
    </LinkContainer> 
    

     <LinkContainer to="/campaigns">
     <Button variant="primary" type="submit" >
            Cancel
    </Button>
     </LinkContainer> 
                  {error && <div classname='error>'>{error}</div>}
      
</Form>
</Col>

</Row>
</Container>
  )
}

export default CreateCampaign

