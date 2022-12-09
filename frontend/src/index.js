import React from 'react';
import ReactDOM from 'react-dom/client';
import './indexs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';   
import { CampaignContextProvider } from './context/CampaignContext';        
import { ProfileContextProvider } from './context/Profilecontext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <AuthContextProvider>
    <ProfileContextProvider>
      <CampaignContextProvider>
          <App />
      </CampaignContextProvider>
     </ProfileContextProvider>
    </AuthContextProvider>

  </React.StrictMode>
);


