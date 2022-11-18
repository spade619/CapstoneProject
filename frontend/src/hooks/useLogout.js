import { useAuthContext } from "./useAuthContext"
import { useProfilesContext } from "./useProfilesContext"

export const useLogout = () => {
const {dispatch} = useAuthContext()
const {dispatch: profilesDispatch} = useProfilesContext()
    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user')

        //dispatch Logout action on auth context 
        dispatch({type: 'LOGOUT'})
        profilesDispatch({type: 'SET_PROFILES', payload: null})

    }

    return {logout}
}