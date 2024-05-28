// React imports
import GreenNavLink from "../GreenNavLink";
import RedNavLink from "../RedNavLink";

// Style imports
import * as Styles from './LandingLayoutHeader.styles';

// Redux imports
import { useAppSelector } from "../../store/store";
import { useAuth } from "../../context/AuthProvider.context";


const LandingLayoutHeader = () => {
    const { isAuthentificated } = useAuth();
    const userData = useAppSelector((state: any) => state.user);

    return (
        <>
            <Styles.CustomGrid>
                <Styles.CustomBoxRow>
                    <Styles.CustomNavlinkLanding to="/" reloadDocument><span style={{textDecoration: 'underline'}}>The Legend of Zelda :</span> The Fall of Hyrule</Styles.CustomNavlinkLanding>
                    <Styles.CustomBoxProfile>
                        {isAuthentificated ? (
                            <Styles.CustomNavlinkButtonProfile to="/profile" reloadDocument>
                                <Styles.CustomAvatar src={`${process.env.REACT_APP_BACKEND_URL}${userData.profile_picture.uri}`} />
                                Profile - {userData.username}
                            </Styles.CustomNavlinkButtonProfile>
                        ) : null}
                    </Styles.CustomBoxProfile>
                </Styles.CustomBoxRow>
                <Styles.CustomDivider />
                <Styles.CustomBoxRow>
                    <Styles.CustomBoxNavRow>
                        <Styles.CustomNavlinkButton to="/" reloadDocument>Accueil</Styles.CustomNavlinkButton>
                        <Styles.CustomDividerVertical orientation="vertical" />
                        <Styles.CustomNavlinkButton to="/contact" reloadDocument>Contact</Styles.CustomNavlinkButton>
                        <Styles.CustomDividerVertical orientation="vertical" />
                        <Styles.CustomNavlinkButton to="/lexique" reloadDocument>Lexique</Styles.CustomNavlinkButton>
                    </Styles.CustomBoxNavRow>
                    {isAuthentificated ? (
                        <RedNavLink label="Se déconnecter" width="200" height="50" to="/signout" />
                    ) : (
                        <GreenNavLink label="Se connecter" width="200" height="50" to="/signin" />
                    )}
                </Styles.CustomBoxRow>
            </Styles.CustomGrid>
        </>
    );
}

export default LandingLayoutHeader;