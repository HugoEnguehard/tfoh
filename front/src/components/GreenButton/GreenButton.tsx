// React imports
import { FC } from "react";

// Style imports
import {
    CustomButton,
} from './GreenButton.styles';

// Interfaces
interface GreenButtonProps {
    label: string,
    isSubmit?: boolean,
    clickFunction?: () => void,
    customStyle?: any,
}

const GreenButton: FC<GreenButtonProps> = ({ label, isSubmit, clickFunction, customStyle }: GreenButtonProps) => {
    return (
        <CustomButton style={customStyle} onClick={clickFunction} type={isSubmit ? "submit" : "button"}>
            {label}
        </CustomButton>
    );
}

export default GreenButton;