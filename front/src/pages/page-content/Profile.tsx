// React imports
import { FC, FormEvent, useEffect, useState } from "react";
import GreenButton from "../../components/GreenButton/GreenButton";

// Redux imports
import { useAppDispatch, useAppSelector } from "../../store/store";
import { editUser, setUser } from "../../store/userSlice";

// Style imports
import * as Styles from '../../styles/Profile.styles';

// Material imports
import { Box, Typography } from "@mui/material";

// Interfaces
import { ProfileForm } from "../../interfaces/ProfileForm";
import { UserState } from "../../interfaces/UserState";
import EditUserResult from "../../interfaces/EditUserResult";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

const Profile: FC = () => {
    const dispatch = useAppDispatch();
    
    const userData: UserState = useAppSelector((state: any) => state.user);

    const [resultMessage, setResultMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isFormUpdated, setIsFormUpdated] = useState<boolean>(false);
    const [formData, setFormData] = useState<ProfileForm>({
        bio: "",
        favorite_jdr: "",
    });

    useEffect(() => {        
        setFormData({
            bio: userData.bio || "",
            favorite_jdr: userData.favorite_jdr || "",
        });
    }, [userData]);

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setIsFormUpdated(false);

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsFormUpdated(true);

        const dataToSend = {
            ...userData,
            ...formData,
        }

        const editUserResult = await dispatch(editUser(dataToSend));

        if(editUser.fulfilled.match(editUserResult)) {
            const editUserData = editUserResult.payload as EditUserResult;
            if (editUserData.success && editUserData.editedUser) {
                dispatch(setUser(editUserData.editedUser));
                setResultMessage("Profil mis à jour !");
            }
            else setErrorMessage(editUserData.message as string);
        }
    }

    return (
        <Styles.CustomGrid>
            <Styles.CustomBoxRow>
                <Box style={{display: 'flex', flexDirection: 'column'}}>
                    <Styles.CustomAvatar src={userData.profilePicture} />
                    <Styles.CustomTypographyBlack>
                        <span style={{textDecoration: "underline"}}>Préférence :</span>
                        {` ${userData.preference ? userData.preference : 'Aucune'}`}
                    </Styles.CustomTypographyBlack>
                </Box>
                <Box style={{marginLeft: '20px'}}>
                    <Styles.CustomTypographyBlack style={{fontSize: '40px'}}>{userData.username}</Styles.CustomTypographyBlack>
                    <Box>
                        <Styles.CustomTypographyGrey width='100% !important'>Membre depuis le {userData.date_creation}</Styles.CustomTypographyGrey>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center'}}>
                        <Styles.CustomTypographyGrey>Campagne jouées : X</Styles.CustomTypographyGrey>
                        <Styles.VerticalDivider />
                        <Styles.CustomTypographyGrey>Campagne crées : X</Styles.CustomTypographyGrey>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center'}}>
                        <Styles.CustomTypographyGrey>Personnages créés : X</Styles.CustomTypographyGrey>
                        <Styles.VerticalDivider />
                        <Styles.CustomTypographyGrey>Personnages morts : X</Styles.CustomTypographyGrey>
                    </Box>
                </Box>
            </Styles.CustomBoxRow>
            <Styles.HorizontalDivider />
            <form onSubmit={handleSubmit}>
                <Styles.CustomBoxRow>
                    <Styles.CustomTypographyBlack style={{width: '200px'}}>Bio :</Styles.CustomTypographyBlack>
                    <textarea placeholder="Parlez nous un peu de vous" name="bio" cols={120} rows={10} value={formData.bio} onChange={handleChangeText} />
                </Styles.CustomBoxRow>
                <Styles.HorizontalDivider />
                <Styles.CustomBoxRow>
                    <Styles.CustomTypographyBlack style={{width: '200px'}}>JDR préféré :</Styles.CustomTypographyBlack>
                    <Box style={{width: '90%'}}>
                        <Styles.CustomInput type="text" name="favorite_jdr" onChange={handleChangeText} value={formData.favorite_jdr} />
                    </Box>
                </Styles.CustomBoxRow>
                <Box style={{margin: '50px 0 0 20px'}}>
                    <Box>
                        <Typography style={{color: '#278527', margin: '20px 0 0 20px'}}>{resultMessage}</Typography>
                        <ErrorMessage text={errorMessage} />
                    </Box>
                    <GreenButton 
                        label={`Valider modifications ${isFormUpdated ? '✓' : ''}`} 
                        customStyle={{width: '400px', height: '50px', marginBottom: '20px'}} 
                        isSubmit={true}
                    />
                </Box>
            </form>
        </Styles.CustomGrid>
    );
}

export default Profile;