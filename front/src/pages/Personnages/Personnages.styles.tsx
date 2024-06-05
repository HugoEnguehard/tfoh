// Material imports
import { Grid, styled } from "@mui/material";

export const CustomGridPage = styled(Grid)({
    width: '100%',
    display: 'flex',
    marginTop: '30px',
});

export const CustomGridCharacters = styled(Grid)({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 2.5% 0 2.5%',
});

export const CustomGridActions = styled(Grid)({
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
});