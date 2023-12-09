// React imports
import React, { FC } from "react";
import LandingLayoutHeader from "./landing/LandingLayoutHeader";

// Material imports
import { Grid, styled } from "@mui/material";

// Style imports
import * as Styles from '../../styles/LandingLayout.styles';
import LandingLayoutFooter from "./landing/LandingLayoutFooter";


// Interfaces
interface LandingLayoutProps {
    childComponent: FC,
}
const LandingLayout: FC<LandingLayoutProps> = ({ childComponent }: LandingLayoutProps) => {
    return (
        <>
        <LandingLayoutHeader />
        <Styles.CustomGrid>
            {React.createElement(childComponent)}
            <LandingLayoutFooter />
        </Styles.CustomGrid>
        </>
    );
}

export default LandingLayout;