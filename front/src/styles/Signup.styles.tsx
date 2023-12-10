
// Material imports
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";


export const CustomForm = styled('form')({
    display: 'flex',
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
    margin: '50px 0 50px',
});

export const CustomTypographyText = styled(Typography)({
    fontSize: '20px',
});
