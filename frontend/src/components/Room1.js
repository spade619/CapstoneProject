import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

function Room1({roomID1, socket}) {
   const [Users, setUsers] = useState([])

      console.log(Users)
   // const _id = '63a212d85c7541784a3b2090'
    const {user} = useAuthContext()

    
      useEffect(() => {
      
        socket.emit('send_users', roomID1)

       socket.on('Init_recieve_users', (data1) => {
          console.log(data1)
       const {email} = data1
        // setUsers((userList) => [...userList, email])
          setUsers(email)
          
        }) 
      }, [])


      useEffect(() => {

       
       
  socket.on('recieve_users', (data1) => {
    // console.log(data1)
  //const {email} = data1
    setUsers((userList) => [...userList, data1])
     // dispatch(setUser({name: data1.email}))
    // setUsers(email)
   }) 


    
 
      }, [socket])



      
     
      useEffect(() => {
       
        socket.on('delete_users', (DeletedData) => {
          console.log('test Delete',DeletedData)
          setUsers((current) => 
          current.filter(
            (Users) =>
            Users !== DeletedData
          ))
   
          
          console.log('deleted')
      })

      }, [socket])

  
   
      
      

  return (
    <div style={{backgroundColor:  'green'}}>
         <h4><strong>ChatRoom-Lobby(Users)</strong> </h4><br/>
         
     <div> 
     {Users.map((Users) => {

        return <h3>{Users} <br/></h3>

       })}
     
     </div>


    </div>
  )
}

export default Room1