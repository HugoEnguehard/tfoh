// React imports
import { NavLink } from "react-router-dom";

// Material imports
import styled from "@emotion/styled";


export const CustomNavLink = styled(NavLink)({
    color: '#FFFFFF',
    fontFamily: 'Hylia Serif',
    fontSize: '26px',
    textDecoration: 'none',
    margin: '10px 0 10px 10px',

    "&:hover": {
        textDecoration: 'underline',
    },

    "&.active": {
        textDecoration: 'underline',
    },
});