// React imports
import React, { FC, FormEvent, useEffect, useState } from "react";
import TypographyText from "../../components/TypographyText";
import DividerVertical from "../../components/DividerVertical";
import FormLabel from "../../components/FormLabel/FormLabel";
import FormInputText from "../../components/InputText/InputText";
import FormInputFileImage from "../../components/InputFileImage/InputFileImage";
import FormInputSelect from "../../components/FormInputSelect";
import GreenButton from "../../components/GreenButton/GreenButton";

// Redux imports
import { useAppDispatch, useAppSelector } from "../../store/store";

// Style imports
import {
    CustomGridRow,
    CustomGridColumn, 
} from './Account.styles';

// Material imports
import { Box } from "@mui/material";

// Interfaces
import AccountGeneralForm from "../../interfaces/AccountGeneralForm";
import UserState from "../../interfaces/UserState.interface";
import EditUserResult from "../../interfaces/EditUserResult";
import { editUser, setUser } from "../../store/userSlice";

export const AccountGeneralFormComponent: FC = () => {
    const dispatch = useAppDispatch();

    const userData: UserState = useAppSelector((state: any) => state.user);
    const [isGeneralUpdated, setIsGeneralUpdated] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const [formData, setFormData] = useState<AccountGeneralForm>({
        firstname: '',
        lastname:  '',
        email: '',
        username: '',
        profilePicture: '',
        preference: '-',
    });

    useEffect(() => {        
        setFormData({
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            username: userData.username,
            profilePicture: userData.profilePicture,
            preference: userData.preference ? userData.preference : '-',
        });
    }, [userData]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log("Submitted");
        setIsGeneralUpdated(true);

        const dataToSend = {
            ...formData,
            id: userData.id,
            date_creation: userData.date_creation,
            bio: userData.bio,
            favorite_jdr: userData.favorite_jdr,
        }

        const editUserResult = await dispatch(editUser(dataToSend));

        if(editUser.fulfilled.match(editUserResult)) {
            const editUserData = editUserResult.payload as EditUserResult;
            if (editUserData.success && editUserData.editedUser) {
                console.log(editUserData.editedUser);
                dispatch(setUser(editUserData.editedUser));
            }
            else setErrorMessage(editUserData.message as string);
        }
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
    
    return (
        <form onSubmit={handleSubmit} style={{width: '100%', height: 'fit-content'}}>
            <CustomGridRow>
                <CustomGridColumn style={{marginRight: '100px'}}>
                    <FormLabel label="Prénom :" htmlFor="firstname" />
                    <FormInputText name="firstname" handleChange={handleChangeText} formData={formData} placeholder="Jean" />
                    <br />
                    <FormLabel label="Nom :" htmlFor="lastname" />
                    <FormInputText name="lastname" handleChange={handleChangeText} formData={formData} placeholder="Dupont" />
                    <br />
                    <FormLabel label="Adresse E-mail :" htmlFor="email" />
                    <FormInputText name="email" handleChange={handleChangeText} formData={formData} placeholder="dupont@tfoh.fr" isRequired />
                    <br />
                    <FormLabel label="Nom d'utilisateur :" htmlFor="username" />
                    <FormInputText name="username" handleChange={handleChangeText} formData={formData} placeholder="JeanDup93" isRequired />
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
                                    { id: '-', label: 'Pas de préférence' },
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