import React from 'react'

function CreateCampaigns() {

    

  return (
      
    <Container>
       
<Row>
   
    <Col md={7} className='d-flex align-items-center justify-content-center flex-directional-column'>
    <Form style={{width: '80%', maxWidth: 500}}>
        <h1>Post Something</h1>

         
        <Form.Group className="mb-3" controlId="formBasicName">
     <Form.Label>Title</Form.Label>
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

export default CreateCampaigns