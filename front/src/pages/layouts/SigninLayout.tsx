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
            {React.createElement(childComponent)}
        </Styles.CustomGrid>
        </>
    );
}

export default SigninLayout;