import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
//pages & components
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Campaigns from './pages/Campaigns'
import About from './pages/About'
import UserSettings from './pages/UserSettings'

function App(){
  //grabs the value either a user is logged in or logged out
  const {user} = useAuthContext()

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
      
        <div className='pages'>
          <Routes>
            

             
          <Route 
            path ="/"
            // if a user is not logged in redirect to login page
            element={user ? <Home /> : <Navigate to ="/login" />} 
            />

            <Route 
            path ="/profiles"
            // if a user is not logged in redirect to login page
            element= {user ? <Profile /> : <Navigate to = "/login"/>}
            
            />

          <Route 
            path ="/login"
            //if a user is logged in navigate to profile page
            element={!user ? <Login /> : <Navigate to = "/" />}
            />

          <Route 
            path ="/signup"
            //if signup is successfull navigate to profile page
            element={!user ? <Signup /> : <Navigate to = "/" />}
            />

            <Route 
            path ="/profiles/settings"
            //if signup is successfull navigate to profile page
            element={user ? <UserSettings /> : <Navigate to = "/login" />}
            />

            <Route 
            path ="/about"
            //if signup is successfull navigate to profile page
            element={user ? <About /> : <Navigate to = "/login" />}
            />

          <Route 
            path ="/campaigns"
            //if signup is successfull navigate to profile page
            element={user ? <Campaigns /> : <Navigate to = "/login" />}
            />
          
          </Routes>

          
          </div>      
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;