// React imports
import React, { FC } from "react";
import SigninLayoutHeader from "./signin/SigninLayoutHeader";

// Style imports
import * as Styles from '../../styles/SigninLayout.styles';

// Interfaces
interface SigninLayoutProps {
    childComponent: FC,
}
const SigninLayout: FC<SigninLayoutProps> = ({ childComponent }: SigninLayoutProps) => {
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

export default SigninLayout;