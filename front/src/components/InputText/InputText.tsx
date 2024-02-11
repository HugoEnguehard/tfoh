// Style imports
import {
    CustomBox, 
    CustomInput,
    CustomEyeButton,
} from './InputText.styles';

// Material imports
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

// Interfaces
interface FormInputTextProps<T> {
    placeholder?: string;
    name: keyof T;
    isPassword?: boolean;
    isEmail?: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: T;
    incorrectField?: boolean;
    isRequired?: boolean;
}

const FormInputText = <T,>({
    placeholder,
    name,
    isPassword,
    handleChange,
    formData,
    isEmail,
    incorrectField,
    isRequired = false,
}: FormInputTextProps<T>) => {
    const [isShown, setIsShown] = useState<boolean>(false);

    const inputType = isPassword && !isShown ? 'password' : isEmail ? 'email' : 'text';

    return (
        <>
            <CustomBox style={incorrectField ? {border: 'solid 1px #D80000'} : {border: 'solid 1px #278527'}}>
                <CustomInput
                    name={name as string}
                    id={name as string}
                    placeholder={placeholder}
                    type={inputType}
                    onChange={handleChange}
                    value={formData[name]}
                    autoComplete={name !== "password" ? (name as string) : "off"}
                    required={isRequired}
                />
                {isPassword ? (
                    <CustomEyeButton onClick={() => setIsShown(!isShown)}>
                    {isShown ? (
                        <VisibilityIcon />
                    ) : (
                        <VisibilityOffIcon />
                    )}
                </CustomEyeButton>
                ) : null}
 
            </CustomBox>
        </>
    );
};

export default FormInputText;
