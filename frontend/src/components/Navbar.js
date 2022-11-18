import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const {logout} = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
   
          <h3>GCC CAPSTONE 2022</h3>

          {user && (
            <div>
          <Link to="/profiles"><strong>{user.name}</strong></Link><br/>
          
            </div>
          )}
        {user && (
          <div>
              <Link to="/">Home_</Link>
              
              <Link to="/campaigns">Campaign_</Link>
              <Link to="/about">About</Link>
              
          </div>
        )}
    
        <nav>
         
       {!user && (
         <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
           
          </div>
       )}
       
            
         {user &&  (
         <div>
          
          <button onClick = {handleClick}> Log out</button>
         
          </div>
            )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar