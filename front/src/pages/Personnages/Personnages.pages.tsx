// React imports
import { FC } from "react";
import { PersonnagesCharacters } from "./Personnages.characters";
import { PersonnagesActions } from "./Personnages.actions";

// Style imports
import {
    CustomGridPage,
} from './Personnages.styles';
import DividerVertical from "../../components/DividerVertical";


export const PersonnagesPage: FC = () => {
    return (
        <CustomGridPage>
            <PersonnagesCharacters />
            <DividerVertical />
            <PersonnagesActions />
        </CustomGridPage>
    );
}