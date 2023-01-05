import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
//pages & components
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navibar from './components/Navibar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Campaigns from './pages/Campaigns'
import CreateCampaign from './pages/CreateCampaign'
import About from './pages/About'
import JoinCampaign from './pages/JoinCampaign'
import UserSettings from './pages/UserSettings'
import { useState } from 'react'

import CurrentCampaign from './components/CurrentCampaign'
import AgentsZone from './components/AgentsZone'

function App(){
  //grabs the value either a user is logged in or logged out
  const {user} = useAuthContext()



  return (
    <div className='App'>


      <BrowserRouter>
      <Navibar />
      
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

            
          <Route 
            path ="campaigns/create"
            //if signup is successfull navigate to profile page
            element={user ? <CreateCampaign /> : <Navigate to = "/login" />}
            />

          <Route 
            path ="campaigns/join"
            //if signup is successfull navigate to profile page
            element={user ? <JoinCampaign /> : <Navigate to = "/login" />}
            />

            <Route 
            path ="agents"
            //if signup is successfull navigate to profile page
            element={user ? <AgentsZone /> : <Navigate to = "/login" />}
            />


             <Route 
            path ="campaigns/join/specific-campaign/:id"
            //if signup is successfull navigate to profile page
            element={user ? <CurrentCampaign /> : <Navigate to = "/login" />}
            />

            
          </Routes>

          
          </div>      
          <Footer />
      </BrowserRouter>
   
    
    </div>
  )
}

export default App;


