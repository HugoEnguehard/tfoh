// React imports
import { FC } from "react";

// Style imports
import * as Styles from '../styles/GreenTextLink.styles';

// Interfaces
interface GreenTextLinkProps {
    url: string,
    text: string,
}

const GreenTextLink: FC<GreenTextLinkProps> = ({ url, text }: GreenTextLinkProps) => {
    return (
        <Styles.CustomNavLink to={`/${url}`}>
            {text}
        </Styles.CustomNavLink>
    );
}

export default GreenTextLink;