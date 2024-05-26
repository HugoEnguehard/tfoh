// React imports
import React, { FC } from "react";
import SigninLayoutHeader from "../../../components/signin-layout/SigninLayoutHeader.component";

// Style imports
import * as Styles from '../../../styles/SigninLayout.styles';

// Interfaces
interface SigninLayoutProps {
    childComponent: FC,
}

export const SigninLayout: FC<SigninLayoutProps> = ({ 
    childComponent,
}: SigninLayoutProps) => {
    return (
        <>
        <SigninLayoutHeader />
        <Styles.CustomGrid>
            <Styles.CustomGridContent>
                {React.createElement(childComponent)} 
            </Styles.CustomGridContent>
        </Styles.CustomGrid>
        </>
    );
}