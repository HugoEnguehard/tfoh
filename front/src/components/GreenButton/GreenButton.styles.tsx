// Material imports
import { Button, styled } from "@mui/material";


export const CustomButton = styled(Button)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',

    color: '#FFFFFF',
    backgroundColor: '#278527',
    border: 'solid 1px #278527',
    borderRadius: '10px',
    fontSize: '20px',
    transition: '.5s',
    minWidth: 'fit-content',
    minHeight: '30px',
    textTransform: 'none',

    "&:hover": {
        color: '#278527',
        backgroundColor: '#FFFFFF',
        transition: '.5s',
    }
});