import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from "react-redux";
// import { setUser } from "../featuresRedux/chatUsers";

function SidebarUsersList({socket}) {

  // const dispatch = useDispatch()
  const [Users, setUsers] = useState([])
  // const user = useSelector((state) => state.user.value)
 
  // const {name} = user
  // console.log(user)
  
  
useEffect(() => {
  
 

  socket.on('recieve_users', (data1) => {
     // console.log('test', data1)
   const {email} = data1
    // setUsers((userList) => [...userList, email])
      // dispatch(setUser({name: data1.email}))
      setUsers(email)
    }) 
  
}, [])


  return (
    <div> 
     
      {Users && Users.map((Users, idx) => (
        <div key={idx}>
          <h3>{Users}</h3>
        </div>
       
      ))}
      
      </div>

  )
}

export default SidebarUsersList