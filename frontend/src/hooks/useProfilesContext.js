import { ProfileContext } from "../context/Profilecontext";
import { useContext } from "react"

export const useProfilesContext = () => {
    //set profiles into the use context hook with the profile context object passed on
        const profiles = useContext(ProfileContext)
        //check if we have a value for the context. throws error if theres none
        if (!profiles) {
            throw Error ('use profiles context must be used inside the workout context provider')
        }
        return profiles
}