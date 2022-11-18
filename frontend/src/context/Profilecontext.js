import {createContext, useReducer} from 'react'

export const ProfileContext = createContext()
export const profilesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROFILES': 
        return{
            profiles: action.payload
        }
        case 'CREATE_PROFILES': 
        return{
            profiles: [action.payload, ...state.profiles]
        }
        default :
        return state
    }
}

//returns the provider for the context children property
export const ProfileContextProvider = ({children}) => {
        //use reducer hook
        const [state, dispatch] = useReducer(profilesReducer, {
            profiles: null
        }) 


    
    return (
       
        <ProfileContext.Provider value = {{...state, dispatch}}>
            {children}
        </ProfileContext.Provider>
    )
}