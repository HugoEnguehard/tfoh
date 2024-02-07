// React imports
import { FC } from "react";

// Style imports
import {
    CustomLabel,
} from './FormLabel.styles';

// Interfaces
interface FormLabelProps {
    label: string,
    htmlFor: string,
}

const FormLabel: FC<FormLabelProps> = ({ label, htmlFor }: FormLabelProps) => {
    return (
        <>
            <CustomLabel htmlFor={htmlFor}>
                {label}
            </CustomLabel>
        </>
    );
}

export default FormLabel;
