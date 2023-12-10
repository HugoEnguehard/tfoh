// Material imports
import { Box, Grid, Typography, styled } from "@mui/material";

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

export const CustomTypographyText = styled(Typography)({
    fontSize: '20px',
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