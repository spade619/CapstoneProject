import React from 'react'
import { useSelector } from 'react-redux'

function SidebarUsersList() {
  const user = useSelector((state) => state.user.value)
  const {name} = user
  
  console.log(user)
  return (
    <div> 
     
      {name && name.map((name, idx) => (
        <div key={idx}>
          <h3>{name}</h3>
        </div>
      ))}
      
      </div>
  )
}

export default SidebarUsersList