// React imports
import React, { FC, FormEvent, useEffect, useState } from "react";
import TypographyText from "../../components/TypographyText";
import DividerVertical from "../../components/DividerVertical";
import FormLabel from "../../components/FormLabel";
import FormInputText from "../../components/FormInputText";
import FormInputFileImage from "../../components/FormInputFileImage";
import DividerHorizontal from "../../components/DividerHorizontal";
import FormInputSelect from "../../components/FormInputSelect";

// Style imports
import * as Styles from '../../styles/Account.styles';

// Material imports
import { Box } from "@mui/material";

// Interfaces
import AccountForm from "../../interfaces/AccountForm";

const Account: FC = () => {
    const [formData, setFormData] = useState<AccountForm>({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
        profilePicture: '',
        preference: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleChangeFileImage = (name: string, value: string) => {
        // Mettre à jour formData avec le base64 du fichier
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);
    
    return (
        <Styles.CustomGrid>
            <form onSubmit={handleSubmit} style={{width: '100%', height: '100%'}}>
                <TypographyText text="Mes informations personnelles" isHyliaSerif size="24"/>
                <DividerHorizontal />
                <Styles.CustomGridRow>
                    <Styles.CustomGridColumn style={{marginRight: '100px'}}>
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
                    </Styles.CustomGridColumn>
                    <DividerVertical />
                    <Styles.CustomGridColumn>
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
                    </Styles.CustomGridColumn>
                </Styles.CustomGridRow>

            </form>

        </Styles.CustomGrid>
    );
}

export default Account;