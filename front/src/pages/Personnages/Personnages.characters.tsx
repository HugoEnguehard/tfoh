// React imports
import { FC, useEffect, useState } from "react";
import TypographyTitle from "../../components/TypographyTitle";
import DividerHorizontal from "../../components/DividerHorizontal";
import { CharacterCardComponent } from "../../components/Personnages/CharacterCard/CharacterCard.component";

// Style imports
import {
    CustomGridCharacters,
} from './Personnages.styles';

// Interfaces
import CharacterGeneralData from "../../interfaces/CharacterGeneralData";
import axios from "axios";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useAppSelector } from "../../store/store";

export const PersonnagesCharacters: FC = () => {
    const userData = useAppSelector((state) => state.user);
    const [characterList, setCharacterList] = useState<CharacterGeneralData[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        const getUserCharacters = async () => {
            try {
                const characters: any = await axios.get(`http://localhost:3080/api/characters/?id_user=${userData.id}`);
                
                setCharacterList(characters.data.characters);
            } catch (error: any) {
                setErrorMessage(error.message);
            }
        }

        getUserCharacters();
        // eslint-disable-next-line
    }, []);

    return (
        <CustomGridCharacters>
            <ErrorMessage text={errorMessage} />
            <TypographyTitle text={"Vos personnages"} isCentered={false} />
            <DividerHorizontal />
            {characterList.map((value, key) => (
                <CharacterCardComponent character={value} key={key} />
            ))}
        </CustomGridCharacters>
    );
}