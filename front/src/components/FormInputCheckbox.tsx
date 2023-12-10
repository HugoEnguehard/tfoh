// Style imports
import * as Styles from '../styles/FormInputCheckbox.styles';

// Interfaces
interface FormInputCheckboxProps<T> {
    label: JSX.Element | string;
    name: keyof T;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: T;
}

const FormInputCheckbox = <T,>({
    label,
    name,
    handleChange,
    formData,
}: FormInputCheckboxProps<T>) => {
    return (
        <>
            <Styles.CustomBox>
                <Styles.CustomInput
                    name={name as string}
                    id={name as string}
                    type="checkbox"
                    onChange={handleChange}
                    checked={formData[name] as boolean} // Assuming it's a boolean field
                    required
                />
                <label htmlFor={name as string}>{label}</label>
            </Styles.CustomBox>
        </>
    );
};

export default FormInputCheckbox;
