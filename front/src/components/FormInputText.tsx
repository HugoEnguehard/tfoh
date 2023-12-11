// Style imports
import * as Styles from '../styles/FormInputText.styles';

// Interfaces
interface FormInputTextProps<T> {
    placeholder?: string;
    name: keyof T;
    isPassword?: boolean;
    isEmail?: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: T;
    incorrectField?: boolean;
}

const FormInputText = <T,>({
    placeholder,
    name,
    isPassword,
    handleChange,
    formData,
    isEmail,
    incorrectField,
}: FormInputTextProps<T>) => {
    return (
        <>
            <Styles.CustomBox style={incorrectField ? {border: 'solid 1px #D80000'} : {border: 'solid 1px #278527'}}>
                <Styles.CustomInput
                    name={name as string}
                    id={name as string}
                    placeholder={placeholder}
                    type={isPassword ? "password" : isEmail ? "email" : "text"}
                    onChange={handleChange}
                    value={formData[name]}
                    autoComplete={name !== "password" ? (name as string) : "off"}
                    required
                />
            </Styles.CustomBox>
        </>
    );
};

export default FormInputText;
