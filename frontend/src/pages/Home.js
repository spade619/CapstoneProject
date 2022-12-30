import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import ChatForm from "../components/ChatForm";
import SidebarUsersList from '../components/SidebarUsersList'
import { useState, useEffect } from "react";
//import { useAuthContext } from '../hooks/useAuthContext'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:4001')





const Home = () => {
  
    const [room, setRoom] = useState(null)
    
   
 //   const {user} = useAuthContext()

    useEffect(() => {
       
        const fetchAllRooms = async () => {
            const RoomsResponse= await fetch('/api/home')
            const roomJson = await RoomsResponse.json()

            if(RoomsResponse.ok){
               
               setRoom(roomJson)
              // console.log(roomJson)
               }
        }
       
     fetchAllRooms()
       
    }, [])

     
   
 

 

    
   
   
    return (
        <Container>
            
            <Row>
                <Col md={4}>
                   
                {room && room.map((room) => (                           
     <Sidebar socket={socket} room={room} key = {room._id} />
                ))}
                  
              <Col>
              <SidebarUsersList socket = {socket}/>
              </Col>
                
            
        
      
       
                </Col>
                <Col md={8}>
                    <ChatForm />
                </Col>
            </Row>
        </Container>
    )
}



export default Home