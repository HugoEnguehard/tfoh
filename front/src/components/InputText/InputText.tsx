// Style imports
import {
    CustomBox, 
    CustomInput,
} from './InputText.styles';

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
    return (
        <>
            <CustomBox style={incorrectField ? {border: 'solid 1px #D80000'} : {border: 'solid 1px #278527'}}>
                <CustomInput
                    name={name as string}
                    id={name as string}
                    placeholder={placeholder}
                    type={isPassword ? "password" : isEmail ? "email" : "text"}
                    onChange={handleChange}
                    value={formData[name]}
                    autoComplete={name !== "password" ? (name as string) : "off"}
                    required={isRequired}
                />
            </CustomBox>
        </>
    );
};

export default FormInputText;
