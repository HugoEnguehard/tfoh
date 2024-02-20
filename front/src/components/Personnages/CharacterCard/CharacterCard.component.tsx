// React imports
import { FC, useState } from "react";
import TypographyTitle from "../../TypographyTitle";
import TypographyText from "../../TypographyText";
import GreenNavLink from "../../GreenNavLink";

// Material imports
import { Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

// Style imports
import {
    CustomBoxCard,
    CustomAvatar,
    CustomBoxText,
    CustomBoxButtons,
    CustomButtonFavorite,
} from './CharacterCard.style';

// Interfaces
import CharacterGeneralData from "../../../interfaces/CharacterGeneralData";

interface CharacterCardComponentProps {
    character: CharacterGeneralData,
}

export const CharacterCardComponent: FC<CharacterCardComponentProps> = ({ character }) => {
    const [characterData, setCharacterData] = useState<CharacterGeneralData>(character);

    const updateFavorite = async () => {
        setCharacterData({
            ...characterData, 
            isFavorite: !characterData.isFavorite,
        });
    }

    return (
        <CustomBoxCard>
            <CustomAvatar src={characterData.name} />
            <CustomBoxText>
                <TypographyTitle text={characterData.name} size="20" isUnderlined />
                <TypographyText isGrey isHyliaSerif size="16" text={<>Campagne : {characterData.campaign}</>} />
                <TypographyText isGrey isHyliaSerif size="16" text={<>Créé le {characterData.date_creation}</>} />
            </CustomBoxText>
            <CustomBoxButtons>
                <CustomButtonFavorite onClick={updateFavorite}>
                    {characterData.isFavorite ? <StarIcon /> : <StarBorderIcon />}
                </CustomButtonFavorite>
                <Box mt='auto' mb='5px'>
                    <GreenNavLink label={"Voir fiche"} width={"85"} height={"20"} to={`/character?id=${characterData.id}`} size="14" />
                </Box>
            </CustomBoxButtons>
        </CustomBoxCard>
    );   
}