// React imports
import { ChangeEvent, useEffect, useState } from "react";
import { CampaignsMain } from "../components/campaigns/Campaigns.main";
import { useNavigate } from "react-router-dom";

// Interfaces
import SortCampaignsForm from "../interfaces/SortCampaigns.form";
import Campaign from "../interfaces/Campaign.interface";
import axios from "axios";
import SelectOptions from "../interfaces/SelectOptions";
import Jdr from "../interfaces/Jdr.interface";


export const CampaignsContainer = () => {
    const navigate = useNavigate();

    const [jdrList, setJdrList] = useState<SelectOptions[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [formDataSort, setFormDataSort] = useState<SortCampaignsForm>({
        sortValue: '-',
    });

    const [campaignsList, setCampaignsList] = useState<Campaign[]>([]);
    const [sortedCampaignsList, setSortedCampaignsList] = useState<Campaign[]>([]);

    const handleClickNewCampaign = () => {
        navigate("/newCampaign");
    }

    const handleInputSort = (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { value, name } = e.target;

        setFormDataSort({
            ...formDataSort,
            [name]: value,
        });
    }

    const getUserCampaigns = async () => {
        try {
            const apiResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/campaigns`, { withCredentials: true });
            setCampaignsList(apiResponse.data.campaigns);
            setSortedCampaignsList(apiResponse.data.campaigns)
        } catch (error: any) {
            setErrorMessage(error.message)
        }
    }

    const getJdrList = async () => {
        try {
            const apiResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/campaigns/jdrs`, { withCredentials: true });

            const optionList: SelectOptions[] = [];

            (apiResponse.data.jdrList as Jdr[]).forEach((jdr: Jdr) => {
                optionList.push(jdrToOption(jdr))
            });

            setJdrList(optionList);
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    }

    const jdrToOption = (jdr: Jdr): SelectOptions => {
        return {id: jdr.id, label: jdr.name}
    }

    const sortCampaignBySortValue = () => {
        if(formDataSort.sortValue === "-") setSortedCampaignsList(campaignsList);
        else {
            const sortedList: Campaign[] = campaignsList.filter((campaign) => campaign.id_jdr == formDataSort.sortValue);
            setSortedCampaignsList(sortedList);
        }
    }

    useEffect(() => {
        getUserCampaigns();
        getJdrList();
    }, []);

    useEffect(sortCampaignBySortValue, [formDataSort.sortValue]);

    return (
        <CampaignsMain 
            errorMessage={errorMessage} 
            formDataSort={formDataSort}
            campaignsList={sortedCampaignsList}
            jdrList={jdrList}
            handleClickNewCampaign={handleClickNewCampaign}
            handleInputSort={handleInputSort}
        />
    );
}