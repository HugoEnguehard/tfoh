// React imports
import React, { FC } from "react";
import SigninLayoutHeader from "./signin/SigninLayoutHeader";
import ProfileSidebar from "./profile/ProfileSidebar";

// Style imports
import * as Styles from '../../styles/ProfileLayout.styles';

// Interfaces
interface ProfileLayoutProps {
    childComponent: FC,
}

const ProfileLayout: FC<ProfileLayoutProps> = ({ childComponent }: ProfileLayoutProps) => {
    return(
        <>
            <SigninLayoutHeader />
            <Styles.CustomGrid>
                <ProfileSidebar />
                {React.createElement(childComponent)}
            </Styles.CustomGrid>
        </>
    );
}

export default ProfileLayout;