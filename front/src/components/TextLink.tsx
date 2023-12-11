// React imports
import { FC } from "react";

// Style imports
import * as Styles from '../styles/TextLink.styles';

// Interfaces
interface TextLinkProps {
    url: string,
    text: string,
    newTab?: boolean,
    color: string,
}

const TextLink: FC<TextLinkProps> = ({ url, text, newTab, color }: TextLinkProps) => {

    return (
        <Styles.CustomTextLinkNav  
            to={`${url}`} 
            target={newTab ? '_blank' : '_self'} 
            rel={newTab ? 'noopener noreferrer' : undefined}
            style={{color: `${color}`}}
        >
            {text}
        </Styles.CustomTextLinkNav >
    );
}

export default TextLink;