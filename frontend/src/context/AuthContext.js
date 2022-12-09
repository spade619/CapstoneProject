import {createContext, useReducer, useEffect} from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        //if the user log in
        case 'LOGIN':
            return { user: action.payload }
        //if the user log out
        case 'LOGOUT' :
            return { user: null }
        default: 
        return state    
    }
}
export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        //user is not logged in to begin with state login state is set to null
        user:null
      
    })
  
    //when the page loads checks the local storage if theres an id saved
    useEffect(() => {
      
        const user = JSON.parse(localStorage.getItem('user'))
        //keeps the user logged in if you refresh or close the browser 
        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
   
    }, [])
    console.log('AuthContext state: ', state)
    return (
       
        //wraps the entire application children is the root  app component
        <AuthContext.Provider value ={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}