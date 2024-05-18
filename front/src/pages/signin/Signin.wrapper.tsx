import { Box, styled } from "@mui/material";


export const CustomForm = styled('form')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

export const CustomBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
});

export const CustomBoxButtons = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px 0 100px',
});