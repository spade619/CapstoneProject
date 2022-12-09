import React, { useState, useContext } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import { ChatContext } from "../context/chatContext";
import "./ChatForm.css";
// import { useAuthContext } from '../hooks/useAuthContext'



function ChatForm () {
    // const { ...user } = useAuthContext()
    const user = 'testxxx'
    const [message, setMessage] = useState('')
    const {socket, currentRoom, setMessages, messages, privateMemberMsg} = useContext(ChatContext)

    function getFormattedDate () {

        const date = new Date()
        const year = date.getFullYear()
        let month = (1+date.getMonth()).toString()

        //format date: month day and year
        month = month.length > 1 ? month : '0' +month
        let day = date.getDate().toString()

        day = day.length > 1 ? day : '0' + day

        return month + '/' + day + '/' + year
    }

    function handleSubmit(e) {
        e.preventDefault()
    }
    
    const todayDate = getFormattedDate()
    //when send button is clicked
    function handleSubmit(e){
        e.preventDefault()
        //returns nothing if butt clicked and theres no message
        if (!message) return
        const today = new Date()
        const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
        const time = today.getHours + ':' + minutes
        const roomId = currentRoom
        socket.emit('message-room', roomId, message, time, user, todayDate)
        setMessage('')
    }


    return (
    <>
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


export default ChatForm