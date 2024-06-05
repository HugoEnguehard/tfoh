// Material imports
import styled from '@emotion/styled';

// Interfaces
import SelectOptions from '../interfaces/SelectOptions';

// Icons imports
import triangleDown from '../icons/TriangleDownGreen.svg'; 

const CustomSelect = styled('select')({
    borderRadius: '30px',
    minWidth: '200px',
    width: '100%',
    height: '50px',
    fontSize: '20px',
    color: '#707070',
    appearance: 'none',
    padding: '0 20px',
    backgroundImage: `url(${triangleDown})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px top 50%',
    outline: 'none',
});


interface FormInputSelectProps<T,> {
    name: keyof T;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    formData: T;
    options: SelectOptions[];
    incorrectField?: boolean;
}

const FormInputSelect = <T,>({
    name,
    handleChange,
    formData,
    options,
    incorrectField,
}: FormInputSelectProps<T>) => {
    return (
        <>
            <CustomSelect
                style={incorrectField ? {border: 'solid 1px #D80000'} : {border: 'solid 1px #278527'}}
                name={name as string}
                id={name as string}
                onChange={handleChange}
                value={formData[name] as string} // Assurez-vous que la valeur est de type string
                required
            >
                {options.map((option, index) => (
                    <option key={index} value={option.id}>
                        {option.label}
                    </option>
                ))}
            </CustomSelect>
        </>
    );
};

export default FormInputSelect;
