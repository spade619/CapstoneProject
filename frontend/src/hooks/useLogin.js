import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    
    const login = async (name, email, password) => {
        //set when making a post request
        setIsLoading(true)
        //refresh the error incase theres an error on the previous login or register
        setError(null)
     
        

            //makes a post request to the backend when user fires the submit button
        const response = await fetch('/api/user/login', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, password})
        })
        // checks the response and recieves a token if success
        const json = await response.json()
        
        //when response returns an error
        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
            console.log('test')
        }
        //when response returns success
        if(response.ok) {
            //saves the user to browser local storage (email and the token)
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({type: 'LOGIN', payload: json})
            
            //ends the browser loading process
            setIsLoading(false)
        }
    }

    return {login,
        isLoading,
        error
        }
}



