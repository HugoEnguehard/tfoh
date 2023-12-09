// React imports
import { styled } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = styled(NavLink)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',

    color: '#FFFFFF',
    backgroundColor: '#278527',
    border: 'solid 1px #278527',
    borderRadius: '10px',
    fontSize: '20px',
    transition: '.5s',
    minWidth: '200px',

    "&:hover": {
        color: '#278527',
        backgroundColor: '#FFFFFF',
        transition: '.5s',
    }
});

// Interfaces
interface GreenNavLinkProps {
    label: string,
    width: string,
    height: string,
    to: string,
}

const GreenButton: FC<GreenNavLinkProps> = ({ label, width, height, to }: GreenNavLinkProps) => {
    return (
        <CustomNavLink to={to} style={{width: `${width}px`, height: `${height}px`}}>
            {label}
        </CustomNavLink>
    );
}

export default GreenButton;