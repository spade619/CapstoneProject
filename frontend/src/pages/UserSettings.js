
import { useState } from "react"
import { useProfilesContext } from '../hooks/useProfilesContext'
import { useAuthContext} from "../hooks/useAuthContext"


const UserSettings = () => {
    //prevent reloading of the browser
 const {dispatch} = useProfilesContext()
 const {user} = useAuthContext()
 //updates the value of the state 
 const [firstName, setfirstName] = useState('')
 const [lastName, setlastName] = useState('')
 const [age, setage] = useState('')
 const [gender, setgender] = useState('')
 const [country, setcountry] = useState('')
 const [job, setjob] = useState('')
 const [error, setError] = useState(null)

 const handleSubmit = async (e) => {
    e.preventDefault()

    if(!user) {
        setError('you must be logged in')
        return
    }

    const profile = {firstName, lastName, age, gender, country, job}

    const response = await fetch('/api/profiles', {
        method: 'POST',
        body: JSON.stringify(profile),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
    })

    const json = await response.json()
    
    if (!response.ok) {
        setError(json.error)
        
    }

    if (response.ok){

        setError(null)
        setfirstName('')
        setlastName('')
        setage('')
        setgender('')
        setcountry('')
        setjob('')


        console.log('new profile updated:', json)
        dispatch({type: 'CREATE_PROFILES', payload: json})
       
       
    }

 }






return(




          <div>
                
                <div className="home">
                     <h2>profile settings page</h2>
                 </div>

    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>
      
        <label>Firstname:</label>
        <input 
            type="text"
            onChange={(e) => setfirstName(e.target.value)}
            value={firstName}
            
        />

        <label>Lastname:</label>
        <input 
            type="text"
            onChange={(e) => setlastName(e.target.value)}
            value={lastName}
          
        />
        
        <label>Age:</label>
        <input 
            type="text"
            onChange={(e) => setage(e.target.value)}
            value={age}
           
        />

        <label>Gender:</label>
        <input 
            type="text"
            onChange={(e) => setgender(e.target.value)}
            value={gender}
           
        />

        <label>Country:</label>
        <input 
            type="text"
            onChange={(e) => setcountry(e.target.value)}
            value={country}
            
        />
        <label>Occupation:</label>
        <input 
            type="text"
            onChange={(e) => setjob(e.target.value)}
            value={job}
            
        />

        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}

    </form>

    </div>

   )

}

export default UserSettings