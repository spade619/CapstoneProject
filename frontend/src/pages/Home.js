import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import ChatForm from "../components/ChatForm";
import SidebarUsersList from '../components/SidebarUsersList'
import { useState, useEffect } from "react";
import { useAuthContext } from '../hooks/useAuthContext'








const Home = () => {
  
    const [room, setRoom] = useState(null)
    
   
    const {user} = useAuthContext()
   
  

   
    
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
     <Sidebar  room={room} key = {room._id} />
                ))}
                  
              <Col>
              <SidebarUsersList />
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