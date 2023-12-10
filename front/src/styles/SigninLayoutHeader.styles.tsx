// React imports
import { NavLink } from "react-router-dom";

// Material imports
import { Grid, styled } from "@mui/material";

// Custom components
export const CustomGrid = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '10vh',
});

export const CustomNavLink = styled(NavLink)({
    fontSize: '26px',
    fontFamily: 'Hylia Serif',
    color: '#000000',
});