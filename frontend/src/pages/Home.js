import { Container, Row, Col } from "react-bootstrap";
// import Sidebar from "../components/Sidebar";
// import SidebarUsersList from '../components/SidebarUsersList'
import { useState, useEffect } from "react";
import { useAuthContext } from '../hooks/useAuthContext'
import io from 'socket.io-client'
import Room1 from "../components/Room1";
import Room2 from "../components/Room2";
import Room3 from "../components/Room3";

import ChatForm1 from "../components/ChatForm1";
import ChatForm2 from "../components/ChatForm2";
import ChatForm3 from "../components/ChatForm3";



const socket = io.connect('http://localhost:4001')




const Home = () => {
  
//     const [room, setRoom] = useState()
    
   
   const {user} = useAuthContext()
 


//  useEffect(() => {
  

//   return () => {
//     socket.disconnect()
//   }
//  }, [])


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

     
   
    const roomID1= '63a212d85c7541784a3b2090'
    const roomID2= '63a2132d343fd5d2b8e33973'
    const roomID3= '63a21335cde1614c7975b74e'
 
 
    const [ToggleRoom, setToggleRoom] = useState(null)

    const sendRoom1 = async () => {
       await socket.emit('join_room', user.name, roomID1)
     } 
     const sendRoom2 = async () => {
        await socket.emit('join_room', user.name, roomID2)
      }
      const sendRoom3 = async () => {
        await socket.emit('join_room', user.name, roomID3)
      }
   
     
    
   
   
    return (
       
        <Container>
            
            <Row>
                <Col md={4}>
      

     <button onClick={() => setToggleRoom(0)}>(default)-globalRoom</button>
     <button onClick={sendRoom1}>join</button><br/> <br/>

     <button onClick={() => setToggleRoom(1)}>(default)-testRoom1</button>
     <button onClick={sendRoom2}>join</button><br/> <br/>
     
     <button onClick={() => setToggleRoom(2)}>(default)-Admin's-Room</button>
     <button onClick={sendRoom3}>join</button><br/> <br/>

   
               


              <Col>
          
              {/* <SidebarUsersList socket = {socket}/> */}
              {ToggleRoom === 0 && <Room1 roomID1={roomID1} socket={socket}/>}
              {ToggleRoom === 1 && <Room2 roomID1={roomID2} socket={socket}/>}
              {ToggleRoom === 2 && <Room3 roomID1={roomID3} socket={socket}/>}
             
            
              </Col>
              
          
            
                </Col>
                <Col md={8}>
                    {/* <ChatForm /> */}
                    {ToggleRoom === 0 && <ChatForm1  
                                                      username = {user.name} 
                                                     roomID1 = {roomID1}
                                                     />}
                    {ToggleRoom === 1 && <ChatForm2 />}
                    {ToggleRoom === 2 && <ChatForm3 />}
                 
                </Col>

               
            </Row>
        </Container>
    )
}



export default Home