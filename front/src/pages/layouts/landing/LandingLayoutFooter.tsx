// React imports
import React, { FC } from "react";

// Style imports
import * as Styles from '../../../styles/LandingLayoutFooter.styles';

// Material imports
import { Box, Button, Divider, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


const LandingLayoutHeader: FC = () => {

    return (
        <>
            <Styles.CustomGrid>
                <Styles.CustomBox>
                    <Styles.CustomNavLink to={"/cgu"}>Condition d'utilisation</Styles.CustomNavLink>
                    <Styles.CustomNavLink to={"/pc"}>Politique de Condifentialité</Styles.CustomNavLink>
                    <Styles.CustomTypography>© Copyright - Hugo Enguehard</Styles.CustomTypography>
                </Styles.CustomBox>
            </Styles.CustomGrid>
        </>
    );
}

export default LandingLayoutHeader;