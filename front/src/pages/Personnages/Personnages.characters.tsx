// React imports
import { FC, useState } from "react";
import TypographyTitle from "../../components/TypographyTitle";
import DividerHorizontal from "../../components/DividerHorizontal";
import { CharacterCardComponent } from "../../components/Personnages/CharacterCard/CharacterCard.component";

// Style imports
import {
    CustomGridCharacters,
} from './Personnages.styles';

// Interfaces
import CharacterGeneralData from "../../interfaces/CharacterGeneralData";

export const PersonnagesCharacters: FC = () => {
    const [characterList, setCharacterList] = useState<CharacterGeneralData[]>([
        {
            id: '1',
            isFavorite: true,
            image: '',
            name: 'Cato',
            campaign: 'TFOH',
            creation_date: '12/02/2024',
        },
        {
            id: '2',
            isFavorite: false,
            image: '',
            name: 'Michel de la Fistinière',
            campaign: 'TFOH',
            creation_date: '11/02/2024',
        },
    ]);

    return (
        <CustomGridCharacters>
            <TypographyTitle text={"Vos personnages"} isCentered={false} />
            <DividerHorizontal />
            {characterList.map((value, key) => (
                <CharacterCardComponent character={value} key={key} />
            ))}
            
        </CustomGridCharacters>
    );
}