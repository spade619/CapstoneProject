import { CampaignContext } from "../context/CampaignContext";
import { useContext } from "react";

export const useCampaignsContext = () => {
    const context = useContext(CampaignContext)
    if (!context) {
        throw Error ('useContext must be used inside the provider')
    }
    return context
}