// React imports
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import TypographyText from "../../components/TypographyText";
import DividerVertical from "../../components/DividerVertical";
import FormLabel from "../../components/FormLabel/FormLabel";
import FormInputText from "../../components/InputText/InputText";
import FormInputFileImage from "../../components/InputFileImage/InputFileImage";
import FormInputSelect from "../../components/FormInputSelect";
import GreenButton from "../../components/GreenButton/GreenButton";

// Style imports
import {
    CustomGridRow,
    CustomGridColumn, 
} from './Account.styles';

// Material imports
import { Box, Typography } from "@mui/material";

// Interfaces
import AccountGeneralForm from "../../interfaces/AccountGeneralForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import UserState from "../../interfaces/UserState.interface";

interface AccountGeneralFormProps {
    errorMessage: string,
    userData: UserState,
    isGeneralUpdated: boolean,
    formDataGeneral: AccountGeneralForm,
    handleInputGeneral: (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => void,
    handleSubmitGeneral: (e: FormEvent) => void,
    handleChangeFileImage: (value: string, file: File) => void,
}

export const AccountGeneralFormComponent = ({
    errorMessage,
    userData,
    isGeneralUpdated,
    formDataGeneral,
    handleInputGeneral,
    handleSubmitGeneral,
    handleChangeFileImage,
}: AccountGeneralFormProps) => {
    return (
        <form onSubmit={handleSubmitGeneral} style={{width: '100%', height: 'fit-content'}}>
            <CustomGridRow>
                <CustomGridColumn style={{marginRight: '100px'}}>
                    <ErrorMessage text={errorMessage} />
                    <FormLabel label="Prénom :" htmlFor="firstname" />
                    <FormInputText name="firstname" handleChange={handleInputGeneral} formData={formDataGeneral} placeholder="Jean" />
                    <br />
                    <FormLabel label="Nom :" htmlFor="lastname" />
                    <FormInputText name="lastname" handleChange={handleInputGeneral} formData={formDataGeneral} placeholder="Dupont" />
                    <br />
                    <FormLabel label="Adresse E-mail :" htmlFor="email" />
                    <FormInputText name="email" handleChange={handleInputGeneral} formData={formDataGeneral} placeholder="dupont@tfoh.fr" isRequired />
                    <br />
                    <FormLabel label="Nom d'utilisateur :" htmlFor="username" />
                    <FormInputText name="username" handleChange={handleInputGeneral} formData={formDataGeneral} placeholder="JeanDup93" isRequired />
                </CustomGridColumn>
                <DividerVertical />
                <CustomGridColumn>
                    <FormLabel label="Photo de profile :" htmlFor="profile_picture" />
                    <Box fontStyle={{marginTop: '5px', display: 'flex'}}>
                        <FormInputFileImage 
                            name="profile_picture" 
                            formData={formDataGeneral} 
                            onChange={handleChangeFileImage} 
                            currentImageForm={formDataGeneral.profile_picture.fileBase64 ? formDataGeneral.profile_picture.fileBase64 : `${process.env.REACT_APP_BACKEND_URL}${userData.profile_picture.uri}`} 
                        />
                        <Box style={{marginLeft: '20px'}}>
                            <TypographyText text="Cliquez sur la photo pour la modifier." size="14" isGrey />
                        </Box>
                    </Box>
                    <Box mt='20px'>
                        <FormLabel label="Préférence :" htmlFor="preference" />
                        <Box mt="10px">
                            <FormInputSelect
                                name='preference'
                                handleChange={handleInputGeneral}
                                formData={formDataGeneral}
                                options={[
                                    { id: '-', label: 'Pas de préférence' },
                                    { id: 'mj', label: 'Maître du Jeu' },
                                    { id: 'pj', label: 'Personnage Joueur' },
                                ]}
                            />
                        </Box>
                    </Box>
                    
                    <Box style={{marginTop: 'auto'}}>
                        <Typography style={{fontSize: '14px', color: '#278527', fontFamily: 'Hylia Serif'}}>
                            {isGeneralUpdated ? 'Informations du compte mises à jour !' : ''}
                        </Typography>
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