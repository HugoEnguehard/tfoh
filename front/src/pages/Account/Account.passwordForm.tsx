// React imports
import { FC, FormEvent, useState } from "react";
import FormInputText from "../../components/InputText/InputText";
import FormLabel from "../../components/FormLabel/FormLabel";
import GreenButton from "../../components/GreenButton/GreenButton";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

// Material imports
import { Typography } from "@mui/material";

// Redux imports
import { useAppSelector } from "../../store/store";

// Style imports
import {
    CustomGridRow,
    CustomGridColumn,
} from './Account.styles';

// Interfaces
import AccoundPasswordForm from "../../interfaces/AccountPasswordForm";
import UserState from "../../interfaces/UserState.interface";

// Other imports
import { CheckPassword } from "../../utils/password";
import axios from "axios";

export const AccountPasswordFormComponent: FC = () => {
    const userData: UserState = useAppSelector((state: any) => state.user);

    const [formData, setFormData] = useState<AccoundPasswordForm>({
        newPassword: '',
        confirmPassword: '',
        oldPassword: '',
    });

    const [isPasswordUpdated, setIsPasswordUpdated] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if(formData.newPassword === formData.confirmPassword) {
            if(CheckPassword(formData.newPassword)) {
                try {
                    const response = await axios.put('http://localhost:3050/api/users/change-password', {
                        id: userData.id,
                        newPassword: formData.newPassword,
                        oldPassword: formData.oldPassword,
                    });

                    if(response.status === 200) {
                        setIsPasswordUpdated(true);
                        setFormData({ oldPassword: '', newPassword: '', confirmPassword: '' });
                        setErrorMessage('');
                    }
                } catch (error: any) {
                    if (error.response && (error.response.status === 401 || error.response.status === 402)) setErrorMessage(error.response.data);
                    else setErrorMessage(error.message);
                }
            }
            else setErrorMessage("Le nouveau mots de passe doit respecter les conditions minimales");
        }
        else setErrorMessage("Les mots de passe doivent être identiques");
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setIsPasswordUpdated(false);

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <form onSubmit={handleSubmit} style={{width: '100%', height: 'fit-content'}}>
            <CustomGridRow>
                <CustomGridColumn mb="100px">
                    <ErrorMessage text={errorMessage} />
                    <FormLabel label="Ancien mot de passe :" htmlFor="oldPassword" />
                    <FormInputText 
                        name="oldPassword" 
                        handleChange={handleChangeText} 
                        formData={formData} 
                        placeholder="**********" 
                        isPassword
                        isRequired
                    />
                    <br />
                    <FormLabel label="Nouveau mot de passe :" htmlFor="newPassword" />
                    <FormInputText 
                        name="newPassword" 
                        handleChange={handleChangeText} 
                        formData={formData} 
                        placeholder="**********" 
                        isPassword
                        isRequired
                    />
                    <br />
                    <FormLabel label="Confirmer nouveau mot de passe :" htmlFor="confirmPassword" />
                    <FormInputText 
                        name="confirmPassword" 
                        handleChange={handleChangeText} 
                        formData={formData} 
                        placeholder="**********" 
                        isPassword
                        isRequired
                    />
                    <br />
                    <GreenButton 
                        label={`Changer le mot de passe ${isPasswordUpdated ? '✓' : ''}`} 
                        customStyle={{width: '300px', height: '50px', fontSize: '16px'}}
                        isSubmit 
                    />
                    <Typography style={{fontSize: '14px', color: '#278527', fontFamily: 'Hylia Serif'}}>
                        {isPasswordUpdated ? 'Mot de passe mis à jour !' : ''}
                    </Typography>
                </CustomGridColumn>
                <CustomGridColumn ml='50px' mt='30px'>
                    <Typography 
                        style={{fontSize: '14px', color: '#707070', fontFamily: 'Hylia Serif'}}
                    >
                        Le mot de passe doit au moins contenir :
                    </Typography>
                    <ul
                        style={{fontSize: '14px', color: '#707070', fontFamily: 'Hylia Serif'}}
                    >
                        <li>1 majuscule</li>
                        <li>1 minuscule</li>
                        <li>1 chiffre</li>
                        <li>1 caractère spécial</li>
                        <li>8 caractères minimum</li>
                        <li>30 caractères maximum</li>
                    </ul>
                </CustomGridColumn>
            </CustomGridRow>
        </form>
    );
}