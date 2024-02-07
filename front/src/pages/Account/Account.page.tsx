// React imports
import { FC } from "react";
import TypographyText from "../../components/TypographyText";
import DividerHorizontal from "../../components/DividerHorizontal";
import { AccountGeneralFormComponent } from "./Account.generalForm";
import { AccountPasswordFormComponent } from "./Account.passwordForm";

// Style imports
import {
    CustomGrid,
} from './Account.styles';

const Account: FC = () => {    
    return (
        <CustomGrid>
            <TypographyText text="Mes informations personnelles" isHyliaSerif size="24"/>
            <DividerHorizontal />
            <AccountGeneralFormComponent />
            <br />
            <TypographyText text="Mot de passe" isHyliaSerif size="24"/>
            <DividerHorizontal />
            <AccountPasswordFormComponent />
        </CustomGrid>
    );
}

export default Account;