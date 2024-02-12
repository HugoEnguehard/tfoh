// Material imports
import { Avatar, Box, Button, styled } from "@mui/material";

export const CustomBoxCard = styled(Box)({
    width: '400px',
    height: 'fit-content',
    border: 'solid 1px #000005',
    borderRadius: '10px',
    display: 'flex',
    marginBottom: '10px',
});

export const CustomAvatar = styled(Avatar)({
    margin: 'auto 5px',
    width: '50px',
    height: '50px',
});

export const CustomBoxText = styled(Box)({
    width: '245px',
    height: '100%',
});

export const CustomBoxButtons = styled(Box)({
    width: '90px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
});

export const CustomButtonFavorite = styled(Button)({
    minWidth: '20px',
    color: '#278527',
    marginLeft: 'auto',
});