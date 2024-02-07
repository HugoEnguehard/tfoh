// React imports
import { FC, FormEvent, useState } from "react";
import GreenButton from "../../components/GreenButton/GreenButton";

// Redux imports
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setUser } from "../../store/userSlice";

// Style imports
import * as Styles from '../../styles/Profile.styles';

// Material imports
import { Box, Typography } from "@mui/material";

// Interfaces
import { ProfileForm } from "../../interfaces/ProfileForm";

const Profile: FC = () => {
    const dispatch = useAppDispatch();
    
    const userData = useAppSelector((state: any) => state.user);

    const [resultMessage, setResultMessage] = useState<string>("");
    const [formData, setFormData] = useState<ProfileForm>({
        bio: userData.bio,
        lovedJdr: userData.lovedJdr,
    });

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);

        dispatch(setUser({
            ...userData, 
            bio: formData.bio,
            lovedJdr: formData.lovedJdr,
        }));

        setResultMessage("Profil mis à jour !");
    }

    return (
        <>
            <Styles.CustomGrid>
                <Styles.CustomBoxRow>
                    <Box style={{display: 'flex', flexDirection: 'column'}}>
                        <Styles.CustomAvatar src={userData.profilePicture} />
                        <Styles.CustomTypographyBlack>
                            <span style={{textDecoration: "underline"}}>Préférence :</span>
                            {` ${userData.preference}`}
                        </Styles.CustomTypographyBlack>
                    </Box>
                    <Box style={{marginLeft: '20px'}}>
                        <Styles.CustomTypographyBlack style={{fontSize: '40px'}}>{userData.username}</Styles.CustomTypographyBlack>
                        <Box>
                            <Styles.CustomTypographyGrey width='100% !important'>Membre depuis le XX/XX/XXXX</Styles.CustomTypographyGrey>
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
                            <Styles.CustomInput type="text" name="lovedJdr" onChange={handleChangeText} value={formData.lovedJdr} />
                        </Box>
                    </Styles.CustomBoxRow>
                    <Box style={{margin: '50px 0 0 20px'}}>
                        <GreenButton 
                            label={"Valider modifications"} 
                            customStyle={{width: '400px', height: '50px'}} 
                            isSubmit={true}
                        />
                    </Box>
                    <Typography style={{color: '#278527', margin: '20px 0 0 20px'}}>{resultMessage}</Typography>
                </form>
            </Styles.CustomGrid>
        </>
    );
}

export default Profile;