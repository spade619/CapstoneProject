import React from 'react';
import ReactDOM from 'react-dom/client';
import './indexs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';   
import { CampaignContextProvider } from './context/CampaignContext';        
import { ProfileContextProvider } from './context/Profilecontext';
import { AuthContextProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './featuresRedux/chatUsers'

const store = configureStore({
  reducer: {
      user: userReducer,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //     </React.StrictMode>
    <Provider store={store}>
    <AuthContextProvider>
    <ProfileContextProvider>
      <CampaignContextProvider>
          <App />
      </CampaignContextProvider>
     </ProfileContextProvider>
    </AuthContextProvider>
    </Provider>


);


