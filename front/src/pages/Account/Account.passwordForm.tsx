// React imports
import { FC, FormEvent, useState } from "react";
import FormInputText from "../../components/InputText/InputText";
import FormLabel from "../../components/FormLabel/FormLabel";
import GreenButton from "../../components/GreenButton/GreenButton";

// Style imports
import {
    CustomGridRow,
    CustomGridColumn,
} from './Account.styles';

// Interfaces
import AccoundPasswordForm from "../../interfaces/AccountPasswordForm";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { CheckPassword } from "../../utils/password";
import { Typography } from "@mui/material";

export const AccountPasswordFormComponent: FC = () => {
    const [formData, setFormData] = useState<AccoundPasswordForm>({
        newPassword: '',
        confirmPassword: '',
        oldPassword: '',
    });

    const [isPasswordUpdated, setIsPasswordUpdated] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log('Submit');
        
        if(formData.newPassword === formData.confirmPassword) {
            if(CheckPassword(formData.newPassword)) {
                setErrorMessage('');
                setIsPasswordUpdated(true);
                const dataToSend = {
                    newPassword: formData.newPassword,
                    oldPassword: formData.oldPassword,
                }
                // TODO : API Request
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
                    <GreenButton 
                        label={`Changer le mot de passe ${isPasswordUpdated ? '✓' : ''}`} 
                        customStyle={{width: '300px', height: '50px', fontSize: '16px'}}
                        isSubmit 
                    />
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