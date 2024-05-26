// Material imports
import styled from "@emotion/styled";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";


export const CustomGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
});

export const CustomBoxRow = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    margin: '30px 0 20px 20px',

    minWidth: '50vw',
    width: '80%',
});

export const CustomAvatar = styled(Avatar)({
    borderRadius: '0',
    width: '180px',
    height: '180px',
});

export const CustomTypographyBlack = styled(Typography)({
    fontFamily: 'Hylia Serif',
    fontSize: '24px',
    color: '#000000',
});

export const CustomTypographyGrey = styled(CustomTypographyBlack)({
    color: '#707070',
    width: '300px',
    marginLeft: '10px',
});

export const VerticalDivider = styled(Divider)({
    backgroundColor: '#707070',
    width: '2px',
    height: '20px',
});

export const HorizontalDivider = styled(Divider)({
    width: '70vw',
    backgroundColor: '#000000',
    height: '1px',
    marginLeft: '20px'
});

export const CustomInput = styled('input')({
    width: '100%',
    border: 'solid 1px #000000',
    height: '32px',
    fontSize: '16px'
});