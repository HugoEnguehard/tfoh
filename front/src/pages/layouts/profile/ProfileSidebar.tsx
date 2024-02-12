// React imports
import { FC } from "react";
import MenuNavLink from "../../../components/MenuNavLink";

// Style imports
import * as Styles from './ProfileSidebar.styles';


const ProfileSidebar: FC = () => {
    return(
        <>
            <Styles.CustomGrid>
                <Styles.CustomNavTop>
                    <MenuNavLink url="/profile" label="GENERAL" />
                    <MenuNavLink url="/account" label="MON COMPTE" />
                    <MenuNavLink url="/characters" label="PERSONNAGES" />
                    <MenuNavLink url="/campaignes" label="CAMPAGNES" />
                    <MenuNavLink url="/friends" label="AMIS" />
                </Styles.CustomNavTop>
                <Styles.CustomNavBottom style={{marginBottom: '30px'}}>
                    <MenuNavLink url="/lexique" label="LEXIQUE" />
                    <MenuNavLink url="/contact" label="CONTACT" />
                </Styles.CustomNavBottom>
            </Styles.CustomGrid>
        </>
    );
}

export default ProfileSidebar;