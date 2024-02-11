// Material imports
import { Box, Button, Input, styled } from "@mui/material";

export const CustomBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid 1px #278527',
    borderRadius: '10px',
    margin: '10px 0',
});

export const CustomInput = styled(Input)({
    margin: '10px',
    width: '100%',
    fontFamily: 'Hylia Serif',
});

export const CustomEyeButton = styled(Button)({
    minWidth: '30px',
    padding: '0',
    marginRight: '5px',

    "& svg": {
        color: '#278527',
    },
});