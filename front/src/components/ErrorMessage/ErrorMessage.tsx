// React imports
import { FC } from "react";

// Material imports
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

// Interfaces
interface CustomFormErrorMessageProps {
    text: string,
}

const CustomTypography = styled(Typography)({
    textAlign: 'center',
    color: '#D80000',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 30px 0',
});

const ErrorMessage: FC<CustomFormErrorMessageProps> = ({ text }: CustomFormErrorMessageProps) => {
    return (
        <CustomTypography>
            {text}
        </CustomTypography>
    );
}

export default ErrorMessage;