// React imports
import { NavLink } from "react-router-dom";

// Material imports
import styled from "@emotion/styled";


export const CustomTextLinkNav  = styled(NavLink)({
    fontSize: '16px',
    textDecoration: 'underline',

    "&:hover": {
        textDecoration: 'underline',
    }
});