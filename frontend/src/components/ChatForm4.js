
import React, { useState, useContext } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";

function ChatForm4() {
        // const { ...user } = useAuthContext()
  
        const [message, setMessage] = useState('')
    
        const handleSubmit = () => {
         console.log('clicked')
         }
         
           
  return (
   

    <>  
    <h3><strong>Admin's Room(Talk to Nel?)</strong></h3>
         <div className="messages-output"> </div>
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

export default ChatForm4