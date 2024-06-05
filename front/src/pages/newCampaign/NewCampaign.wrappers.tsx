import { Grid, styled } from "@mui/material";


export const NewCampaignGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '5%',
    width: '90%',
});

export const CustomNewCampaignForm = styled('form')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const CustomTypeCampaignGrid = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
});