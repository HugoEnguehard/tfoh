// React imports
import { FC } from "react";
import TypographyTitle from "../../components/TypographyTitle";
import DividerHorizontal from "../../components/DividerHorizontal";

// Style imports
import {
    CustomGridActions,
} from './Personnages.styles';


export const PersonnagesActions: FC = () => {
    return (
        <CustomGridActions>
            <TypographyTitle text={"Actions en attente"} />
            <DividerHorizontal />
            
        </CustomGridActions>
    );
}