// React imports
import { FC } from "react";

// Style imports
import * as Styles from '../styles/FormInputText.styles';

// Interfaces
import SigninForm from "../interfaces/SigninForm";

interface FormLabelProps {
    placeholder: string,
    name: keyof SigninForm,
    isPassword: boolean,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    formData: SigninForm,
}

const FormLabel: FC<FormLabelProps> = ({ placeholder, name, isPassword, handleChange, formData }: FormLabelProps) => {
    return (
        <>
            <Styles.CustomBox>
                <Styles.CustomInput 
                    name={name} 
                    id={name} 
                    placeholder={placeholder} 
                    type={isPassword ? "password" : "text"} 
                    onChange={handleChange} 
                    value={formData[name]} 
                    autoComplete={name !== "password" ? name : "off"}
                    required 
                />
            </Styles.CustomBox>
        </>
    );
}

export default FormLabel;
