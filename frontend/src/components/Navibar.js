
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import storyadore from '../assets/storyadore.png'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap"

 import io from 'socket.io-client'

const socket = io.connect('http://localhost:4001')

const Navibar = () => {
  const {logout} = useLogout()
  const { user } = useAuthContext()

    // function disconnectClient () {
    //       socket.disconnect()
    // }

  const handleClick = () => {
    
    //disconnectClient()
    logout()
  }

  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><img src={storyadore} className="signup-display-pic"  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
          <Navbar.Collapse>
        {user && (<LinkContainer to="/profiles">
              <Nav.Link><strong>{user.name}</strong></Nav.Link>
                  </LinkContainer>)}
        </Navbar.Collapse>

           {user && (<LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                   )}

          {user && (<LinkContainer to="/campaigns">
              <Nav.Link>Campaign</Nav.Link>
                  </LinkContainer>
                   )}

        {user && (<LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                   )}

          </Nav>
        </Navbar.Collapse>

        
        <nav>
            
         {user &&  (
         <div>
          
          <button onClick = {handleClick}> Log out</button>
         
          </div>
            )}
        </nav>
      </Container>
    </Navbar>

  )
}

export default Navibar

