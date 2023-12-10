// React imports
import { FC } from "react";

// Material imports
import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',

    color: '#FFFFFF',
    backgroundColor: '#278527',
    border: 'solid 1px #278527',
    borderRadius: '10px',
    fontSize: '20px',
    transition: '.5s',
    minWidth: '200px',
    textTransform: 'none',

    "&:hover": {
        color: '#278527',
        backgroundColor: '#FFFFFF',
        transition: '.5s',
    }
});

// Interfaces
interface GreenButtonProps {
    label: string,
    width: string,
    height: string,
    isSubmit?: boolean,
    clickFunction?: () => void,
}

const GreenButton: FC<GreenButtonProps> = ({ label, width, height, isSubmit, clickFunction }: GreenButtonProps) => {
    return (
        <CustomButton style={{width: `${width}px`, height: `${height}px`}} onClick={clickFunction} type={isSubmit ? "submit" : "button"}>
            {label}
        </CustomButton>
    );
}

export default GreenButton;