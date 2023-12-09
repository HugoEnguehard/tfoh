// React imports
import { NavLink } from "react-router-dom";

// Material imports
import styled from "@emotion/styled";
import { Grid, Box, Typography } from "@mui/material";

// Custom components
export const CustomGrid = styled(Grid)({
    position: 'absolute',
    bottom: '0',

    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    width: '100%',
    height: '200px',
});

export const CustomBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginRight: '150px',
});

export const CustomNavLink = styled(NavLink)({
    color: '#FFFFFF',
    fontSize: '20px',
    fontFamily: 'Hylia Serif',
    textAlign: 'end',
    textDecoration: 'none',

    "&:hover": {
        textDecoration: 'underline',
    }
});

export const CustomTypography = styled(Typography)({
    color: '#FFFFFF',
    fontSize: '20px',
    fontFamily: 'Hylia Serif',
    textAlign: 'end',
    marginTop: '20px',
});