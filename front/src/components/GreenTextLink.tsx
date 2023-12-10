// React imports
import { FC } from "react";

// Style imports
import * as Styles from '../styles/GreenTextLink.styles';

// Interfaces
interface GreenTextLinkProps {
    url: string,
    text: string,
    newTab?: boolean,
}

const GreenTextLink: FC<GreenTextLinkProps> = ({ url, text, newTab }: GreenTextLinkProps) => {
    return (
        <Styles.CustomNavLink to={`/${url}`} target={newTab ? '_blank' : '_self'} rel={newTab ? 'noopener noreferrer' : undefined}>
            {text}
        </Styles.CustomNavLink>
    );
}

export default GreenTextLink;