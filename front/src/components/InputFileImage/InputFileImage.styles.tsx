// Material imports
import { Avatar, styled } from "@mui/material";


export const CustomAvatar = styled(Avatar)({
    width: '100px',
    height: '100px',
    backgroundColor: '#f0f0f0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    border: 'solid 1px #FFFFFF',
    borderRadius: '0px',

    "&:hover": {
        border: 'solid 1px #278527',
        cursor: 'pointer',
    }
});