// React imports
import React, { FC } from "react";
import GreenNavLink from "../../../components/GreenNavLink";

// Style imports
import * as Styles from '../../../styles/LandingLayoutHeader.styles';

// Material imports
import { Box, Button, Divider } from "@mui/material";


const LandingLayoutHeader: FC = () => {

    return (
        <>
            <Styles.CustomGrid>
                <Styles.CustomBoxRow>
                    <Styles.CustomNavlinkLanding to="/"><span style={{textDecoration: 'underline'}}>The Legend of Zelda :</span> The Fall of Hyrule</Styles.CustomNavlinkLanding>
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
                    <GreenNavLink label="Se connecter" width="200" height="50" to="/login" />
                </Styles.CustomBoxRow>
            </Styles.CustomGrid>
        </>
    );
}

export default LandingLayoutHeader;