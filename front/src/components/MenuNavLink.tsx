// React imports
import { FC } from "react";

// Style imports
import * as Styles from '../styles/MenuNavLink.styles';

// Interfaces
interface MenuNavLinkProps {
    url: string,
    label: string,
}

const MenuNavLink: FC<MenuNavLinkProps> = ({ url, label }: MenuNavLinkProps) => {
    return (
        <Styles.CustomNavLink to={url} reloadDocument >
            {label}
        </Styles.CustomNavLink>
    );
}

export default MenuNavLink;