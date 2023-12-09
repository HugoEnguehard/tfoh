// React imports
import { NavLink } from "react-router-dom";

// Material imports
import styled from "@emotion/styled";
import { Grid, Box, Divider } from "@mui/material";

// Custom components
export const CustomGrid = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    margin: '50px 0',
    height: 'calc(20vh - 100px)'
});

export const CustomBoxNavRow = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: '80%',
});

export const CustomBoxRow = styled(CustomBoxNavRow)({
    justifyContent: 'space-between'
});

export const CustomDivider = styled(Divider)({
    backgroundColor: '#000000',
    width: '80%',
    margin: '20px 0',
});

export const CustomDividerVertical = styled(Divider)({
    backgroundColor: '#000000',
    width: '.1px',
    height: '20px'
});

export const CustomNavlinkLanding = styled(NavLink)({
    color: '#000000',
    fontSize: '26px',
    textDecoration: 'none',
    fontFamily: 'Hylia Serif',
});

export const CustomNavlinkButton = styled(CustomNavlinkLanding)({
    fontSize: '20px',
    margin: '0 10px',

    "&:hover": {
        textDecoration: 'underline',
    },
});

