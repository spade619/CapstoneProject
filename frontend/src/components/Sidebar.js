import { useContext, useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import "./Sidebar.css";
import io from 'socket.io-client'
// import {useSelector} from 'react-redux'

import {ChatContext} from "../context/chatContext"

// const socket=io.connect('http://localhost:4001')

function Sidebar () {
    // const user = useSelector((state) => state.user)

        const {socket, setMembers,
                        members,
                        CurrentRoom,
                    setCurrentRoom,
                          rooms,
                        setRooms,
                        privateMemberMsg,
                        setPrivateMemberMsg, } = useContext(ChatContext)
       

       useEffect(() => {
        function getRooms () {
            fetch('http://localhost:4001/rooms')
            .then((res) => res.json())
            .then((data) => setRooms(data))
           } 
            // setCurrentRoom('Server')
            getRooms()
            socket.emit('join-room', 'Server')
            socket.emit('new-user')
        
       }, [])
       
       
         // use socket.io to send and recieve data on the backend 
        socket.off('new-user').on('new-user', (payload) => {
            console.log(payload)
            setMembers(payload)

        })

            //fetch the rooms
      


    
        return (
            <>
            {/* renders the available chatrooms on the screen */}
                <h2>Chat Servers</h2>
                <ListGroup>
                    {rooms.map((room, idx) => (
                           <ListGroup.Item key={idx}>
                            {room}
                           </ListGroup.Item>
                    ))}
                </ListGroup>
    
                <h2>Members</h2>
                     {members.map((member) => (<ListGroup.Item key={member.id} style={{cursor: 'pointer'}}>
                            {member.name}
    
                     </ListGroup.Item>))}   
    
            </>
    
        )
    
     }

   


export default Sidebar