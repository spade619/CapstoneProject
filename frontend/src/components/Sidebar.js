import { useContext, useEffect, useState, useRef } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import "./Sidebar.css";
import { useAuthContext } from '../hooks/useAuthContext'









function Sidebar ({socket, room}) {
  
  const {_id} = room
 
   const [AllRooms, setAllRooms] = useState(null)
  //picks a certain room by id
  const buttonRef = useRef()
  

  //targets the current user
  const {user} = useAuthContext()

  const send = async () => {
     socket.emit('join_room', user.name, room._id)
  }
  
  //to select  a specific chat room
  const selectRoom = async () => {
    await socket.emit('send_users', _id)
   
  }

  function focus () {
    buttonRef.current.focus()
  }

   function handleClick () {
    send()
    selectRoom()
    focus()

   }

    
    useEffect(() => {
      //outputs all the rooms on component mount
      const {roomName} = room
      setAllRooms(roomName)
      
   
     
   }, [])
   

   
   

  

     
    
      
       

 

    
        return (
       
         <div>
            <div>      
            <button onClick={selectRoom}>{AllRooms} </button>
            <button  ref={buttonRef}  onClick={handleClick}>join</button>
           </div>
        </div>


        )
        

      
        
      
    
     }

   


export default Sidebar