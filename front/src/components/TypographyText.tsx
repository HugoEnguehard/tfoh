// React imports
import { FC } from "react";

// Material imports
import { Typography, styled } from "@mui/material";

// Interfaces
interface TypographyTextProps {
    size?: string,
    text: string,
}

// Custom components
const CustomTypographyText = styled(Typography)({
    fontSize: '20px',
    textAlign: 'center',
});


const TypographyText: FC<TypographyTextProps> = ({ size, text }: TypographyTextProps) => {
    return (
        <CustomTypographyText style={{fontSize: `${size}px`}} >
            {text}
        </CustomTypographyText>
    );
}

export default TypographyText;