// React imports
import { ChangeEvent } from "react";
import { CampaignDisplayComponent } from "./Campaign.display";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import GreenButton from "../GreenButton/GreenButton";
import DividerHorizontal from "../DividerHorizontal";
import FormInputSelect from "../FormInputSelect";
import TypographyTitle from "../TypographyTitle";
import FormLabel from "../FormLabel/FormLabel";

// Material imports
import { Box } from "@mui/material";

// Style imports
import { CampaignMainDisplayGrid, CampaignsMainGrid, CampaignsMainSortGrid } from "../../pages/campaigns/Campaigns.wrappers";

// Interfaces
import SortCampaignsForm from "../../interfaces/SortCampaigns.form";
import Campaign from "../../interfaces/Campaign.interface";
import SelectOptions from "../../interfaces/SelectOptions";

interface CampaignsMainProps {
    errorMessage: string,
    formDataSort: SortCampaignsForm,
    campaignsList: Campaign[],
    jdrList: SelectOptions[],
    handleClickNewCampaign: () => void,
    handleInputSort: (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => void,
}

export const CampaignsMain = ({
    errorMessage,
    formDataSort,
    campaignsList,
    jdrList,
    handleClickNewCampaign,
    handleInputSort,
}: CampaignsMainProps) => {
    return (
        <CampaignsMainGrid>
            <TypographyTitle text="Vos Campagnes" isCentered={false} />
            <DividerHorizontal />
            {errorMessage ? (<ErrorMessage text={errorMessage} />) : null}
            <GreenButton 
                label="+ Nouvelle Campagne" 
                customStyle={{width: '250px', borderRadius: '30px'}} 
                clickFunction={handleClickNewCampaign}
            />
            <CampaignsMainSortGrid>
                <FormLabel label="Trier par :" htmlFor="sortValue" />
                <Box width='300px' ml='20px'>
                    <FormInputSelect
                        name='sortValue'
                        handleChange={handleInputSort}
                        formData={formDataSort}
                        options={[
                            { id: '-', label: 'Toutes' },
                            ...jdrList,
                        ]}
                    />
                </Box>
            </CampaignsMainSortGrid>

            <CampaignMainDisplayGrid>
                {campaignsList.map((campaign, index) => (
                    <CampaignDisplayComponent 
                        key={index} 
                        campaign={campaign} 
                    />
                ))}
            </CampaignMainDisplayGrid>
        </CampaignsMainGrid>
    );
}