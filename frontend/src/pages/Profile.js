import { Link } from 'react-router-dom'
import { useEffect } from "react"
import { useProfilesContext } from "../hooks/useProfilesContext"

import { useAuthContext } from "../hooks/useAuthContext"



//profile page components
import ProfileDetails from '../components/ProfileDetails'


const Profile = () => {
    //fires the profiles reducer function in the profile context
    const {profiles, dispatch} =  useProfilesContext()
    const {user} = useAuthContext()
 
    //use Effect fires a function when the component is rendered
    useEffect(() => {
    //fetch the profile data from the backend using the fetch api
        //fetch from the server URI
    const fetchProfileData = async () => {
         const response = await fetch('/api/profiles', {
            //sends a request for the authorization headers
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
         })
        //parse the json response (json will be in an array when responded successfully)
        const json = await response.json()
        //check if response is ok (200)
        if(response.ok) {
            //this fires the profiles Reducer function with the type: passed on
          dispatch({type : 'SET_PROFILES', payload: json})
        } 

  
        }
        //calls on the backend request function if theres a user
        if (user) {
            fetchProfileData()
        }
      
 //empty dependency array [] makes useEffect to fire only once when the component renders
    }, [dispatch, user])
    
 
    return (
        <div className="profilePage">

            <div>
                <p><strong>update profile page</strong></p>
            </div>
            <Link to="/profiles/settings">Settings</Link>

       


            <div className="profile">

                {profiles && profiles.map((profiles) => (
                    
                    <ProfileDetails key={profiles._id} profiles={profiles} />
                    
                ))}

       
                

            </div>
            
        </div>
    )
            

                  
                    
                
                
}

export default Profile