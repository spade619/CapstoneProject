import { createContext, useReducer } from "react";

export const CampaignContext = createContext()

export const campaignsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CAMPAIGNS':
            return {
                campaigns: action.payload
            }
        case 'CREATE_CAMPAIGN':
            return {
                campaigns: [action.payload, ...state.campaigns]
            }
        case 'DELETE_CAMPAIGN':
            return {
                campaigns: state.campaigns.filter((c) => c._id !== action.payload._id)
            }
        default:
                return state
    }
}

export const CampaignContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(campaignsReducer, {
        campaigns: null
    })

   
    return (
        <CampaignContext.Provider value = {{...state, dispatch}}>
            {children}
        </CampaignContext.Provider>
    )
}


