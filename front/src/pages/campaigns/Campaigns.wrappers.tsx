import { Box, Grid, styled } from "@mui/material";


export const CampaignsMainGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    margin: '2%',
    width: '96%'
});

export const CampaignsMainSortGrid = styled(Grid)({
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
});

export const CampaignMainDisplayGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
});

export const CampaignMainDisplayBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    border: 'solid 1px #707070',
    borderRadius: '10px',
    width: '400px',
    height: '120px',
    margin: '10px 0',
});