// Material imports
import styled from "@emotion/styled";
import { Grid, Box, Typography } from "@mui/material";

// Custom components
export const CustomGrid = styled(Grid)({
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
});

export const CustomBoxLeft = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    minWidth: '300px',
    width: '30%',
    marginTop: '100px'
});

export const CustomBoxRight = styled(CustomBoxLeft)({
    width: '40%'
});

export const CustomTypographyTitle = styled(Typography)({
    fontSize: '32px',
});

export const CustomTypographyText = styled(Typography)({
    fontSize: '24px',
    textAlign: 'justify',
});
