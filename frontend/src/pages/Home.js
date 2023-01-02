import { Container, Row, Col } from "react-bootstrap";
// import Sidebar from "../components/Sidebar";
// import SidebarUsersList from '../components/SidebarUsersList'
import { useState, useEffect } from "react";
//import { useAuthContext } from '../hooks/useAuthContext'
import io from 'socket.io-client'
import Room1 from "../components/Room1";
import Room2 from "../components/Room2";
import Room3 from "../components/Room3";
import Room4 from "../components/Room4";
import ChatForm1 from "../components/ChatForm1";
import ChatForm2 from "../components/ChatForm2";
import ChatForm3 from "../components/ChatForm3";
import ChatForm4 from "../components/ChatForm4";


const socket = io.connect('http://localhost:4001')





const Home = () => {
  
//     const [room, setRoom] = useState(null)
    
   
//  //   const {user} = useAuthContext()

//     useEffect(() => {
       
//         const fetchAllRooms = async () => {
//             const RoomsResponse= await fetch('/api/home')
//             const roomJson = await RoomsResponse.json()

//             if(RoomsResponse.ok){
               
//                setRoom(roomJson)
//               // console.log(roomJson)
//                }
//         }
       
//      fetchAllRooms()
       
//     }, [])

     
   
 

 
    const [ToggleRoom, setToggleRoom] = useState(0)
    
   
   
    return (
       
        <Container>
            
            <Row>
                <Col md={4}>
                   
                {/* {room && room.map((room) => (                           
     <Sidebar socket={socket} room={room} key = {room._id} />
                ))} */}

     <button onClick={() => setToggleRoom(0)}>(default)-globalRoom</button><br/>
     <button onClick={() => setToggleRoom(1)}>(default)-testRoom1</button><br/>
     <button onClick={() => setToggleRoom(2)}>(default)-testRoom2</button><br/>
     <button onClick={() => setToggleRoom(3)}>(default)-Admin's</button>
    
               


              <Col>
              {/* <SidebarUsersList socket = {socket}/> */}
              {ToggleRoom === 0 && <Room1 />}
              {ToggleRoom === 1 && <Room2 />}
              {ToggleRoom === 2 && <Room3 />}
              {ToggleRoom === 3 && <Room4 />}
            
              </Col>
              
                
            
                </Col>
                <Col md={8}>
                    {/* <ChatForm /> */}
                    {ToggleRoom === 0 && <ChatForm1 />}
                    {ToggleRoom === 1 && <ChatForm2 />}
                    {ToggleRoom === 2 && <ChatForm3 />}
                    {ToggleRoom === 3 && <ChatForm4 />}
                </Col>

               
            </Row>
        </Container>
    )
}



export default Home