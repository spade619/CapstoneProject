import { useContext, useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import "./Sidebar.css";
import { useAuthContext } from '../hooks/useAuthContext'
import io from 'socket.io-client'
import { useDispatch } from "react-redux";
import { setUser } from "../featuresRedux/chatUsers";

const socket = io.connect('http://localhost:4001')





function Sidebar ({room}) {
  const dispatch = useDispatch()
  const {_id} = room
 
   const [AllRooms, setAllRooms] = useState(null)
  //picks a certain room by id
  

  //targets the current user
  const {user} = useAuthContext()

  const send = async () => {
     socket.emit('join_room', user.name, room._id)
  }
  
  //to select  a specific chat room
  const selectRoom = async () => {
    await socket.emit('send_users', _id)
  
  }

    
    useEffect(() => {
      //outputs all the rooms on component mount
      const {roomName} = room
      setAllRooms(roomName)
      
      socket.on('recieve_users', (data1) => {
      // console.log(data1)
      
       dispatch(setUser({name: data1.members}))
     })
     
   }, [socket])
   

   
   

  

     
    
      
       

 

    
        return (
       
         <div>
            <div>      
            <button onClick={selectRoom}>{AllRooms} </button>
            <button onClick={send}>join</button>
           </div>
        </div>


        )
        

      
        
      
    
     }

   


export default Sidebar