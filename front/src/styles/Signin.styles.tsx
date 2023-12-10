// Material imports
import { Box, Divider, Grid, Typography, styled } from "@mui/material";

export const CustomGrid = styled(Grid)({
    minWidth: '500px',
    width: '40%',
    backgroundColor: '#FFFFFF',
    padding: '10px',
    borderRadius: '10px',
});

export const CustomForm = styled('form')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

export const CustomTypographyTitle = styled(Typography)({
    fontSize: '32px',
    fontFamily: 'Hylia Serif',
    margin: '30px 0 20px',
});

export const CustomTypographyText = styled(Typography)({
    fontSize: '20px',
});

export const CustomDivider = styled(Divider)({
    width: '80%',
    height: '1px',
    backgroundColor: '#707070',
    margin: '10px 0 40px',
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