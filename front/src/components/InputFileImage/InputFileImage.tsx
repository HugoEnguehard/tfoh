// Material imports
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

// Style imports
import {
    CustomAvatar,
} from './InputFileImage.styles';

interface FormInputFileImageProps<T> {
    formData: T;
    name: keyof T; // Utilisation de keyof T pour assurer que name est une clé de T
    onChange: (name: keyof T, value: string) => void;
}

const FormInputFileImage = <T,>({
    formData,
    name,
    onChange,
}: FormInputFileImageProps<T>) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                onChange(name, base64); // Utilisation de name ici pour indiquer quelle clé de T est mise à jour
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <label htmlFor={name as string}>
            <CustomAvatar
                alt="Profile Picture"
                src={formData[name] as string} // Utilisation de formData[name] comme source de l'Avatar
            />
            <input
                type="file"
                id={name as string}
                name={name as string}
                onChange={handleChange}
                accept="image/png, image/jpeg"
                style={{ display: 'none' }}
            />
        </label>
    );
};

export default FormInputFileImage;
