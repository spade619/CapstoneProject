import React from 'react';
import ReactDOM from 'react-dom/client';
import './indexs.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ProfileContextProvider } from './context/Profilecontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <AuthContextProvider>
    <ProfileContextProvider>
          <App />
     </ProfileContextProvider>
    </AuthContextProvider>

  </React.StrictMode>
);


