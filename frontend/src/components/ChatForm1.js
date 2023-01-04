import React, { useState, useContext } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";

import "./ChatForm.css";
// import { useAuthContext } from '../hooks/useAuthContext'



function ChatForm1 () {
    // const { ...user } = useAuthContext()
  
    const [message, setMessage] = useState('')
    
   const handleSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    }
    
      
    


    return (
    <>  
    <h3><strong>Global-Chat-Room(Messenger)</strong></h3>
         <div className="messages-output" style={{backgroundColor:  'green'}}> </div>
             <Form onSubmit = {handleSubmit}>

                   <Row>
                       <Col md={11}>
                        <Form.Group>
                             <Form.Control type="text" placeholder="your message" value={message} onChange={(e) => setMessage(e.target.value)}>

                              </Form.Control>
                          </Form.Group>
                      </Col>

                       <Col md={1}>
                      <Button variant="primary" type="submit" style={{width: "100%", backgroundColor: "blue"}}>send</Button>
                        </Col>
                     </Row>

         </Form>
       
    </>

 )
}


export default ChatForm1