import { useState } from "react"
import { useProfilesContext } from '../hooks/useProfilesContext'
import { useAuthContext} from "../hooks/useAuthContext"


//edits the profile page
const ProfileDetails = ({profiles}) => {

    //prevent reloading of the browser
    const {dispatch} = useProfilesContext()
    const {user} = useAuthContext()
    //updates the value of the state 
    const [fName, setFname] = useState('test')
    const [lName, setLname] = useState('add last Name')
    const [Age, setAge] = useState('test')
    const [Gender, setGender] = useState('add your gender')
    const [Country, setCountry] = useState('add your country')
    const [Job, setJob] = useState('add your occupation')
    const [error, setError] = useState(null)
        
    // calls when edit button is clicked toggles input and label
       
       const [changeNameButton, setChangeNameButton] = useState(false)
       const changeNameButtonOn = () => setChangeNameButton(true)
       const changeNameButtonOff = () => setChangeNameButton(false)

       const [changeAgeButton, setchangeAgeButton] = useState(false)
       const changeAgeButtonOn = () => setchangeAgeButton(true)
       const changeAgeButtonOff = () => setchangeAgeButton(false)

       const [changeGenderButton, setchangeGenderButton] = useState(false)
       const changeGenderButtonOn = () =>  setchangeGenderButton(true)
       const changeGenderButtonOff = () =>  setchangeGenderButton(false)

       const [changeCountryButton, setchangeCountryButton] = useState(false)
       const changeCountryButtonOn = () =>  setchangeCountryButton(true)
       const changeCountryButtonOff = () =>  setchangeCountryButton(false)

       const [changeJobButton, setchangeJobButton] = useState(false)
       const changeJobButtonOn = () =>  setchangeJobButton(true)
       const changeJobButtonOff = () => setchangeJobButton(false) 



      
    //renders the user profile info

    const editName = async (e) => {
        e.preventDefault()
        
        if (!user){
            return
        }
    
        
        const response = await fetch('/api/profiles', {
            method: 'PATCH',
            body: JSON.stringify({age: Age}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok){
            setError(json.error)
        }
        if(response.ok) {
            setError(null)
         
            console.log('profile updated', json)
            dispatch({type : 'SET_PROFILES', payload: json})
        }


    }

  


    





    return(
        <div className="profile-details">
            <h2>USER PROFILE</h2><br/>
                <p><strong>image here</strong></p><br/>


            <p><strong> Username: </strong>
            {changeNameButton ? <input
                              type ="text" 
                              //sets the value to what the user has typed
                              onChange={(e) => setFname(e.target.value)}
                              value = {fName}           
            />  : profiles.firstName}                    
            
             {changeNameButton ? <input
                               type ="text" 
                               //sets the value to what the user has typed
                               onChange={(e) => setLname(e.target.value)}
                               value = {lName}           
            /> : profiles.lastName}

            {changeNameButton ? <button onClick={changeNameButtonOff}> save </button> : <button onClick={changeNameButtonOn}> edit</button>}</p>


            <p><strong>Age: </strong>
            {changeAgeButton ? <input
                              type ="text" 
                              //sets the value to what the user has typed
                              onChange={(e) => setAge(e.target.value)}
                              value = {Age}           
            />  : profiles.age} 

             {changeAgeButton ? <button onClick={changeAgeButtonOff}> save </button> : <button onClick={changeAgeButtonOn}> edit</button>}</p>


             <p><strong>Gender: </strong>
            {changeGenderButton ? <input
                              type ="text" 
                              //sets the value to what the user has typed
                              onChange={(e) => setGender(e.target.value)}
                              value = {Gender}           
            />  : profiles.gender} 

             {changeGenderButton ? <button onClick={changeGenderButtonOff}> save </button> : <button onClick={changeGenderButtonOn}> edit</button>}</p>


            
             <p><strong>Country: </strong>
            {changeCountryButton ? <input
                              type ="text" 
                              //sets the value to what the user has typed
                              onChange={(e) => setGender(e.target.value)}
                              value = {Country}           
            />  : profiles.country} 

             {changeCountryButton ? <button onClick={changeCountryButtonOff}> save </button> : <button onClick={changeCountryButtonOn}> edit</button>}</p>


             <p><strong>Occupation: </strong>
            {changeJobButton ? <input
                              type ="text" 
                              //sets the value to what the user has typed
                              onChange={(e) => setGender(e.target.value)}
                              value = {Job}           
            />  : profiles.job} 

             {changeJobButton ? <button onClick={changeJobButtonOff}> save </button> : <button onClick={changeJobButtonOn}> edit</button>}</p>


            
            

        </div>

        
    )
}

export default ProfileDetails