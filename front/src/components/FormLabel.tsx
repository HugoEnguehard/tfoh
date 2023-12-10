// React imports
import { FC } from "react";

// Style imports
import * as Styles from '../styles/FormLabel.styles';

// Interfaces
interface FormLabelProps {
    label: string,
    htmlFor: string,
}

const FormLabel: FC<FormLabelProps> = ({ label, htmlFor }: FormLabelProps) => {
    return (
        <>
            <Styles.CustomLabel htmlFor={htmlFor}>
                {label}
            </Styles.CustomLabel>
        </>
    );
}

export default FormLabel;
