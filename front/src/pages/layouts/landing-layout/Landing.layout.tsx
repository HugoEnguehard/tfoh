// React imports
import React, { FC } from "react";
import LandingLayoutHeader from "../../../components/landing-layout/LandingLayoutHeader.component";
import LandingLayoutFooter from "../../../components/landing-layout/LandingLayoutFooter.component";

// Style imports
import * as Styles from '../../../styles/LandingLayout.styles';


// Interfaces
interface LandingLayoutProps {
    childComponent: FC,
}
export const LandingLayout: FC<LandingLayoutProps> = ({ 
    childComponent,
}: LandingLayoutProps) => {
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