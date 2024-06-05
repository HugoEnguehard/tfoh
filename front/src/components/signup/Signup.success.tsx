import { Box } from "@mui/material";
import TypographyText from "../TypographyText";
import TypographyTitle from "../TypographyTitle";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GreenNavLink from "../GreenNavLink";
import { SignupSuccessGrid, SuccessSVGBox } from "../../pages/signup/Signup.wrapper";


export const SignupSuccessComponent = () => {
    return (
        <SignupSuccessGrid>
            <SuccessSVGBox>
                <CheckCircleIcon />
            </SuccessSVGBox>
            <Box m='20px 0' display='flex' flexDirection='column' alignItems='center'>
                <TypographyTitle text="COMPTE CRÉÉ AVEC SUCCÈS" />
                <TypographyText text="Il ne vous reste plus qu'à vous connecter" />
            </Box>
            <GreenNavLink label="Aller à l'écran de connexion" width="400" height="50" to="/signin" />
            <br />
        </SignupSuccessGrid>
    );
}