// React imports
import { FC } from "react";

// Material imports
import { Typography, styled } from "@mui/material";

// Interfaces
interface TypographyTitleProps {
    size?: string,
    text: string,
}

// Custom components
const CustomTypographyTitle = styled(Typography)({
    fontFamily: 'Hylia Serif',
    fontSize: '32px',
    textAlign: 'center',
});


const TypographyTitle: FC<TypographyTitleProps> = ({ size, text }: TypographyTitleProps) => {
    return (
        <CustomTypographyTitle style={{fontSize: `${size}px`}} >
            {text}
        </CustomTypographyTitle>
    );
}

export default TypographyTitle;