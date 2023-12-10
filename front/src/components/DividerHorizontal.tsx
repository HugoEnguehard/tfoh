// React imports
import { FC } from "react";

// Material imports
import { Divider, styled } from "@mui/material";

// Interfaces
interface DividerHorizontalProps {
    widthPercentage?: string,
    text?: string,
}

// Custom components
const CustomDivider = styled(Divider)({
    width: '80%',
    height: '1px',
    backgroundColor: '#707070',
    margin: '10px 0 40px',
});


const DividerHorizontal: FC<DividerHorizontalProps> = ({ widthPercentage, text }: DividerHorizontalProps) => {
    return (
        <CustomDivider style={{width: `${widthPercentage}%`}} >
            {text}
        </CustomDivider>
    );
}

export default DividerHorizontal;