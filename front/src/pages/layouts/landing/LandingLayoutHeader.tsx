// React imports
import { FC } from "react";
import GreenNavLink from "../../../components/GreenNavLink";
import RedNavLink from "../../../components/RedNavLink";

// Style imports
import * as Styles from './LandingLayoutHeader.styles';

// Redux imports
import { useAppSelector } from "../../../store/store";

// Material imports


const LandingLayoutHeader: FC = () => {
    const isAuthenticated = useAppSelector((state: any) => state.auth.authStatus);
    const userData = useAppSelector((state: any) => state.user);

    return (
        <>
            <Styles.CustomGrid>
                <Styles.CustomBoxRow>
                    <Styles.CustomNavlinkLanding to="/" reloadDocument><span style={{textDecoration: 'underline'}}>The Legend of Zelda :</span> The Fall of Hyrule</Styles.CustomNavlinkLanding>
                    <Styles.CustomBoxProfile>
                        {isAuthenticated ? (
                            <Styles.CustomNavlinkButtonProfile to="/profile" reloadDocument>
                                <Styles.CustomAvatar src={userData.profilePicture} />
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
                    {isAuthenticated ? (
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