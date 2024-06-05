// Style imports
import {
    CustomAvatar,
} from './InputFileImage.styles';

interface FormInputFileImageProps<T> {
    formData: T,
    name: keyof T,
    onChange: (value: string, file: File) => void,
    currentImageForm?: string,
}

const FormInputFileImage = <T,>({
    formData,
    name,
    onChange,
    currentImageForm,
}: FormInputFileImageProps<T>) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onChange(reader.result as string, file);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <label htmlFor={name as string}>
            <CustomAvatar
                alt="Profile Picture"
                src={currentImageForm}
            />
            <input
                type="file"
                id={name as string}
                name={name as string}
                onChange={handleChange}
                accept="image/png, image/jpeg, image/jpeg"
                style={{ display: 'none' }}
            />
        </label>
    );
};

export default FormInputFileImage;
