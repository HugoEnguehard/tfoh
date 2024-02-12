// React imports
import { FC } from "react";

// Material imports
import { Typography, styled } from "@mui/material";

// Interfaces
interface TypographyTitleProps {
    size?: string,
    text: string,
    isHyliaSerif?: boolean,
    isCentered?: boolean,
    isGrey?: boolean,
    isUnderlined?: boolean,
}

// Custom components
const CustomTypographyTitle = styled(Typography)({
    fontFamily: 'Hylia Serif',
    fontSize: '32px',
    textAlign: 'start',


    "&.hyliaSerif": {
        fontFamily: 'Hylia Serif',
    },

    "&.centered": {
        textAlign: 'center',
    },

    "&.grey": {
        color: '#707070',
    },

    "&.underlined": {
        textDecoration: 'underline',
    },
});


const TypographyTitle: FC<TypographyTitleProps> = ({ size, text, isHyliaSerif, isCentered, isGrey, isUnderlined }: TypographyTitleProps) => {
    let customClass = isHyliaSerif ? 'hyliaSerif ' : '';
    customClass = isCentered ? customClass + 'centered ' : customClass;
    customClass = isGrey ? customClass + 'grey ' : customClass;
    customClass = isUnderlined ? customClass + 'underlined ' : customClass;
    
    return (
        <CustomTypographyTitle className={customClass} style={{fontSize: `${size}px`}} >
            {text}
        </CustomTypographyTitle>
    );
}

export default TypographyTitle;