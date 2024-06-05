// Style imports
import { CampaignMainDisplayBox } from "../../pages/campaigns/Campaigns.wrappers";

// Interfaces
import Campaign from "../../interfaces/Campaign.interface"
interface CampaignDisplayComponentProps {
    campaign: Campaign,
}


export const CampaignDisplayComponent = ({
    campaign,
}: CampaignDisplayComponentProps) => {
    return (
        <CampaignMainDisplayBox>
            {campaign.name}
        </CampaignMainDisplayBox>
    );
}