// React imports
import { FC } from "react";
import GreenNavLink from "../../../components/GreenNavLink";

// Style imports
import * as Styles from '../../../styles/LandingLayoutHeader.styles';

// Image imports


// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { setAuthStatus } from "../../../store/authSlice";

// Material imports
import { Avatar, Box } from "@mui/material";


const LandingLayoutHeader: FC = () => {
    const isAuthenticated = useSelector((state: any) => state.auth.authStatus);
    const userData = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(setAuthStatus(!isAuthenticated));
    }

    return (
        <>
            <Styles.CustomGrid>
                <Styles.CustomBoxRow>
                    <Styles.CustomNavlinkLanding to="/"><span style={{textDecoration: 'underline'}}>The Legend of Zelda :</span> The Fall of Hyrule</Styles.CustomNavlinkLanding>
                    <Styles.CustomBoxProfile>
                        {isAuthenticated ? (
                            <Styles.CustomAvatar src={userData.profilePicture} />
                        ) : (
                            <>Déconnecté</>
                        )}
                        <button onClick={handleLogin}>Test</button>
                    </Styles.CustomBoxProfile>
                </Styles.CustomBoxRow>
                <Styles.CustomDivider />
                <Styles.CustomBoxRow>
                    <Styles.CustomBoxNavRow>
                        <Styles.CustomNavlinkButton to="/">Accueil</Styles.CustomNavlinkButton>
                        <Styles.CustomDividerVertical orientation="vertical" />
                        <Styles.CustomNavlinkButton to="/contact">Contact</Styles.CustomNavlinkButton>
                        <Styles.CustomDividerVertical orientation="vertical" />
                        <Styles.CustomNavlinkButton to="/lexique">Lexique</Styles.CustomNavlinkButton>
                    </Styles.CustomBoxNavRow>
                    <GreenNavLink label="Se connecter" width="200" height="50" to="/signin" />
                </Styles.CustomBoxRow>
            </Styles.CustomGrid>
        </>
    );
}

export default LandingLayoutHeader;