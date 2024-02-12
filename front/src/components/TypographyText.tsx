// React imports
import { FC } from "react";

// Material imports
import { Typography, styled } from "@mui/material";

// Interfaces
interface TypographyTextProps {
    size?: string,
    text: JSX.Element | string,
    isHyliaSerif?: boolean,
    isCentered?: boolean,
    isGrey?: boolean,
}

// Custom components
const CustomTypographyText = styled(Typography)({
    fontSize: '20px',
    textAlign: 'start',
    color: '#000000',
    
    "&.hyliaSerif": {
        fontFamily: 'Hylia Serif',
    },

    "&.centered": {
        textAlign: 'center',
    },

    "&.grey": {
        color: '#707070',
    },
});


const TypographyText: FC<TypographyTextProps> = ({ size, text, isHyliaSerif, isCentered, isGrey }: TypographyTextProps) => {
    let customClass = isHyliaSerif ? 'hyliaSerif ' : '';
    customClass = isCentered ? customClass + 'centered ' : customClass;
    customClass = isGrey ? customClass + 'grey ' : customClass;

    return (
        <CustomTypographyText style={{fontSize: `${size}px`}} className={customClass} >
            {text}
        </CustomTypographyText>
    );
}

export default TypographyText;