// React imports
import React, { FC, FormEvent, useEffect, useState } from "react";
import TypographyText from "../../components/TypographyText";
import DividerVertical from "../../components/DividerVertical";
import FormLabel from "../../components/FormLabel/FormLabel";
import FormInputText from "../../components/InputText/InputText";
import FormInputFileImage from "../../components/InputFileImage/InputFileImage";
import DividerHorizontal from "../../components/DividerHorizontal";
import FormInputSelect from "../../components/FormInputSelect";

// Style imports
import {
    CustomGridRow,
    CustomGridColumn, 
} from './Account.styles';

// Material imports
import { Box } from "@mui/material";

// Interfaces
import AccountGeneralForm from "../../interfaces/AccountGeneralForm";
import GreenButton from "../../components/GreenButton/GreenButton";

export const AccountGeneralFormComponent: FC = () => {
    const [formData, setFormData] = useState<AccountGeneralForm>({
        firstname: 'Hugo',
        lastname: 'Enguehard',
        email: 'hugo.enguehard@tfoh.fr',
        username: 'Darkaine',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
        profilePicture: '',
        preference: '',
    });
    const [isGeneralUpdated, setIsGeneralUpdated] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Submitted");
        setIsGeneralUpdated(true);
        
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setIsGeneralUpdated(false);

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = e.target;
        setIsGeneralUpdated(false);

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleChangeFileImage = (name: string, value: string) => {
        setIsGeneralUpdated(false);
        // Mettre à jour formData avec le base64 du fichier
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    useEffect(() => {
        console.log(formData);
    }, [formData]);
    
    return (
        <form onSubmit={handleSubmit} style={{width: '100%', height: 'fit-content'}}>
            <CustomGridRow>
                <CustomGridColumn style={{marginRight: '100px'}}>
                    <FormLabel label="Prénom :" htmlFor="firstname" />
                    <FormInputText name="firstname" handleChange={handleChangeText} formData={formData} placeholder="Hugo" />
                    <br />
                    <FormLabel label="Nom :" htmlFor="lastname" />
                    <FormInputText name="lastname" handleChange={handleChangeText} formData={formData} placeholder="Enguehard" />
                    <br />
                    <FormLabel label="Adresse E-mail :" htmlFor="email" />
                    <FormInputText name="email" handleChange={handleChangeText} formData={formData} placeholder="hugo.enguehard@tfoh.fr" />
                    <br />
                    <FormLabel label="Nom d'utilisateur :" htmlFor="username" />
                    <FormInputText name="username" handleChange={handleChangeText} formData={formData} placeholder="Darkaine" />
                </CustomGridColumn>
                <DividerVertical />
                <CustomGridColumn>
                    <FormLabel label="Photo de profile :" htmlFor="profilePicture" />
                    <Box fontStyle={{marginTop: '5px', display: 'flex'}}>
                        <FormInputFileImage name="profilePicture" formData={formData} onChange={handleChangeFileImage} />
                        <Box style={{marginLeft: '20px'}}>
                            <TypographyText text="Cliquez sur la photo pour la modifier." size="14" isGrey />
                        </Box>
                    </Box>
                    <Box mt='20px'>
                        <FormLabel label="Préférence :" htmlFor="preference" />
                        <Box mt="10px">
                            <FormInputSelect
                                name='preference'
                                handleChange={handleChangeSelect}
                                formData={formData}
                                options={[
                                    { id: 'mj', label: 'Maître du Jeu' },
                                    { id: 'pj', label: 'Personnage Joueur' },
                                ]}
                            />
                        </Box>
                    </Box>
                    <Box style={{marginTop: 'auto'}}>
                        <GreenButton 
                            label={`Enregistrer les modifications ${isGeneralUpdated ? '✓' : ''}`} 
                            customStyle={{width: '300px', height: '50px', fontSize: '16px'}}
                            isSubmit
                        />
                    </Box>
                </CustomGridColumn>
            </CustomGridRow>
        </form>
    );
}