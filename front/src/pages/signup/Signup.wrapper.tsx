import { Box, Grid, styled } from "@mui/material";


export const CustomForm = styled('form')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
});

export const SignupSuccessGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

export const SuccessSVGBox = styled(Box)({
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',

    "& svg": {
        width: '100%',
        height: '100%',
        color: '#278527',
    }
})

export const CustomBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
});

export const CustomBoxButtons = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px 0 50px',
});