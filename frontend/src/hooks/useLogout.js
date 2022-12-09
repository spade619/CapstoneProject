import { useAuthContext } from "./useAuthContext"
import { useProfilesContext } from "./useProfilesContext"
import { useCampaignsContext} from './useCampaignContext'

export const useLogout = () => {
const {dispatch} = useAuthContext()
const {dispatch: profilesDispatch} = useProfilesContext()
const {dispatch: campaignsDispatch} = useCampaignsContext()
    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user')

        //dispatch Logout action on auth context 
        dispatch({type: 'LOGOUT'})
        profilesDispatch({type: 'SET_PROFILES', payload: null})
        campaignsDispatch({type: 'SET_CAMPAIGNS', payload: null})
    }

    return {logout}
}