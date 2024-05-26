import { Box, Typography } from "@mui/material"
import { CustomAvatar, CustomBoxRow, CustomGrid, CustomInput, CustomTypographyBlack, CustomTypographyGrey, HorizontalDivider, VerticalDivider } from "./Profile.styles"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import GreenButton from "../GreenButton/GreenButton"


// Interfaces 
import UserState from "../../interfaces/UserState.interface"
import { ChangeEvent, FormEvent } from "react"
import ProfileForm from "../../interfaces/ProfileForm"

interface ProfileMainProps {
    userData: UserState,
    errorMessage: string,
    formData: ProfileForm,
    isFormUpdated: boolean,
    validationMessage: string,
    handleSubmit: (e: FormEvent) => void,
    handleInputText: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}


export const ProfileMain = ({
    userData,
    errorMessage,
    formData,
    isFormUpdated,
    validationMessage,
    handleSubmit,
    handleInputText,
}: ProfileMainProps) => {
    return (
        <CustomGrid>
            <CustomBoxRow>
                <Box style={{display: 'flex', flexDirection: 'column'}}>
                    <CustomAvatar src={userData.profilePicture} />
                    <CustomTypographyBlack>
                        <span style={{textDecoration: "underline"}}>Préférence :</span>
                        {` ${userData.preference ? userData.preference : 'Aucune'}`}
                    </CustomTypographyBlack>
                </Box>
                <Box style={{marginLeft: '20px'}}>
                    <CustomTypographyBlack style={{fontSize: '40px'}}>{userData.username}</CustomTypographyBlack>
                    <Box>
                        <CustomTypographyGrey width='100% !important'>Membre depuis le {userData.date_creation}</CustomTypographyGrey>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center'}}>
                        <CustomTypographyGrey>Campagne jouées : X</CustomTypographyGrey>
                        <VerticalDivider />
                        <CustomTypographyGrey>Campagne crées : X</CustomTypographyGrey>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center'}}>
                        <CustomTypographyGrey>Personnages créés : X</CustomTypographyGrey>
                        <VerticalDivider />
                        <CustomTypographyGrey>Personnages morts : X</CustomTypographyGrey>
                    </Box>
                </Box>
            </CustomBoxRow>
            <HorizontalDivider />
            <form onSubmit={handleSubmit}>
                <CustomBoxRow>
                    <CustomTypographyBlack style={{width: '200px'}}>Bio :</CustomTypographyBlack>
                    <textarea placeholder="Parlez nous un peu de vous" name="bio" cols={120} rows={10} value={formData.bio} onChange={handleInputText} />
                </CustomBoxRow>
                <HorizontalDivider />
                <CustomBoxRow>
                    <CustomTypographyBlack style={{width: '200px'}}>JDR préféré :</CustomTypographyBlack>
                    <Box style={{width: '90%'}}>
                        <CustomInput type="text" name="favorite_jdr" onChange={handleInputText} value={formData.favorite_jdr} />
                    </Box>
                </CustomBoxRow>
                <Box style={{margin: '50px 0 0 20px'}}>
                    <Box>
                        <Typography style={{color: '#278527', margin: '20px 0 0 20px'}}>{validationMessage}</Typography>
                        <ErrorMessage text={errorMessage} />
                    </Box>
                    <GreenButton 
                        label={`Valider modifications ${isFormUpdated ? '✓' : ''}`} 
                        customStyle={{width: '400px', height: '50px', marginBottom: '20px'}} 
                        isSubmit={true}
                    />
                </Box>
            </form>
        </CustomGrid>
    )
    
}