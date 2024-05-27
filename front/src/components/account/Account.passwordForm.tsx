// React imports
import { ChangeEvent, FormEvent } from "react";
import FormInputText from "../../components/InputText/InputText";
import FormLabel from "../../components/FormLabel/FormLabel";
import GreenButton from "../../components/GreenButton/GreenButton";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

// Material imports
import { Typography } from "@mui/material";

// Style imports
import {
    CustomGridRow,
    CustomGridColumn,
} from './Account.styles';

// Interfaces
import AccoundPasswordForm from "../../interfaces/AccountPasswordForm";

interface AccoundPasswordFormComponentProps {
    errorMessage: string,
    isPasswordUpdated: boolean,
    formDataPassword: AccoundPasswordForm,
    handleSubmitPassword: (e: FormEvent) => void,
    handleInputPassword: (e: ChangeEvent<HTMLInputElement>) => void,
}


export const AccountPasswordFormComponent = ({
    errorMessage,
    isPasswordUpdated,
    formDataPassword,
    handleInputPassword,
    handleSubmitPassword
}: AccoundPasswordFormComponentProps) => {
    return (
        <form onSubmit={handleSubmitPassword} style={{width: '100%', height: 'fit-content'}}>
            <CustomGridRow>
                <CustomGridColumn mb="100px">
                    <ErrorMessage text={errorMessage} />
                    <FormLabel label="Ancien mot de passe :" htmlFor="oldPassword" />
                    <FormInputText 
                        name="oldPassword" 
                        handleChange={handleInputPassword} 
                        formData={formDataPassword} 
                        placeholder="**********" 
                        isPassword
                        isRequired
                    />
                    <br />
                    <FormLabel label="Nouveau mot de passe :" htmlFor="newPassword" />
                    <FormInputText 
                        name="newPassword" 
                        handleChange={handleInputPassword} 
                        formData={formDataPassword} 
                        placeholder="**********" 
                        isPassword
                        isRequired
                    />
                    <br />
                    <FormLabel label="Confirmer nouveau mot de passe :" htmlFor="confirmPassword" />
                    <FormInputText 
                        name="confirmPassword" 
                        handleChange={handleInputPassword} 
                        formData={formDataPassword} 
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