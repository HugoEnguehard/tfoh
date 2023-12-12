// React imports
import { FC } from "react";

// Material imports
import { Divider, styled } from "@mui/material";

// Interfaces
interface DividerVerticalProps {
    widthPercentage?: string,
    text?: string,
}

// Custom components
const CustomDividerVertical = styled(Divider)({
    width: '1px',
    backgroundColor: '#707070',
    margin: '0 20px',
});


const DividerVertical: FC<DividerVerticalProps> = ({ widthPercentage, text }: DividerVerticalProps) => {
    return (
        <CustomDividerVertical style={{width: `${widthPercentage}%`}} >
            {text}
        </CustomDividerVertical>
    );
}

export default DividerVertical;