// React imports
import { NavLink } from "react-router-dom";

// Material imports
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

// Custom components
export const CustomGrid = styled(Grid)({
    width: '100vw',
    height: '100vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    "& img": {
        height: '500px',
    }
});

export const CustomTypography = styled(Typography)({
    fontSize: '32px',
    fontFamily: 'Hylia Serif',
});

export const CustomNavLink = styled(NavLink)({
    fontSize: '24px',
    textDecoration: 'underline',
    color: '#278527',
    fontFamily: 'Hylia Serif',
    marginTop: '20px',

    "&:hover": {
        color: '#00B050',
    }
});