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
    size?: string,
}

const GreenNavLink: FC<GreenNavLinkProps> = ({ label, width, height, to, size = '20' }: GreenNavLinkProps) => {
    return (
        <CustomNavLink to={to} style={{width: `${width}px`, height: `${height}px`, fontSize: `${size}px`}} reloadDocument>
            {label}
        </CustomNavLink>
    );
}

export default GreenNavLink;