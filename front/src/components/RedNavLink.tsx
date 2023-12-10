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
    backgroundColor: '#D80000',
    border: 'solid 1px #D80000',
    borderRadius: '10px',
    fontSize: '20px',
    transition: '.5s',
    minWidth: '200px',

    "&:hover": {
        color: '#D80000',
        backgroundColor: '#FFFFFF',
        transition: '.5s',
    }
});

// Interfaces
interface RedNavLinkProps {
    label: string,
    width: string,
    height: string,
    to: string,
}

const RedNavLink: FC<RedNavLinkProps> = ({ label, width, height, to }: RedNavLinkProps) => {
    return (
        <CustomNavLink to={to} style={{width: `${width}px`, height: `${height}px`}}>
            {label}
        </CustomNavLink>
    );
}

export default RedNavLink;