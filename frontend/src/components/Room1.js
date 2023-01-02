import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

function Room1({roomID1, socket}) {
   const [Users, setUsers] = useState([])
     // console.log(Users)
   // const _id = '63a212d85c7541784a3b2090'
    const {user} = useAuthContext()


      useEffect(() => {
       
        socket.emit('send_users', roomID1)
  
      }, [])


      useEffect(() => {
        
  socket.on('recieve_users', (data1) => {
    // console.log(data1)
 // const {email} = data1
    setUsers((userList) => [...userList, data1])
     // dispatch(setUser({name: data1.email}))
    // setUsers(email)
   }) 
      
      
      }, [socket])
      
      

  return (
    <div>
         <h4><strong>ChatRoom-Lobby(Users)</strong> </h4><br/>
         
     <div> 
     {Users.map((Users) => {
        return <h3>{Users}</h3>
       })}
     
     </div>


    </div>
  )
}

export default Room1