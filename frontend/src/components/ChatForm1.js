import React, { useState, useContext, useEffect } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import  io from 'socket.io-client'
import "./ChatForm.css";
 import { useAuthContext } from '../hooks/useAuthContext'

const socket = io.connect('http://localhost:4001')

function ChatForm1 (username, roomID1,) {
     const {user} = useAuthContext()
  

    const [message, setMessage] = useState('')
    //const [UsersChat, setUsersChat] = useState([])
    const [Recievemessage, setRecievemessage] = useState([])
  
    console.log('testasdasd', Recievemessage)

   const handleSubmit = async (e) => {

   e.preventDefault()
   
   const messageData = {
        chatUsers: user.name,
        message: message
   }
   // console.log(username, roomID1, messageData)
 // console.log('testersr', message)
    if (message !== ''){
        await socket.emit('send_message1', messageData)
    }
    //roomID1, username,
    
    setMessage('')
    }
    
    useEffect(() => {
 
        socket.on('recieve_message1', (message1) => {
        //  console.log('recieved message', username)
          // console.log('test', message1)
            const {chatUsers, message} = message1
           // setUsersChat(username)
           // setUsersChat((userList) => [...userList], username.chatUsers)
         setRecievemessage((messageList) => [...messageList, {chatUsers, message}])
           // dispatch(setUser({name: data1.email}))
          // setUsers(email)
         }) 
       
            }, [socket])
      
    


    return (
    <>  
    <h3><strong>Global-Chat-Room(Messenger)</strong></h3>
         <div className="messages-output" style={{backgroundColor:  'green'}}>
{/*             
            <div>   {UsersChat.map((UsersChat) => {

return <h3>{UsersChat} <br/></h3>

})}
</div> */}
      

         {Recievemessage.map((Recievemessage, idx) => {

        return <h4 key = {idx}><strong>{Recievemessage.chatUsers}: {Recievemessage.message} </strong></h4>

})}


            
             </div>
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