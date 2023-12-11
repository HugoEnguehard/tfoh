// Material imports
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

// Image imports
import backgroundImage from '../images/profile-bg-bleu.png';

export const CustomGrid = styled(Grid)({
    minWidth: '20vw',
    width: '20vw',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
});

export const CustomNavBottom = styled('nav')({
    minWidth: '15vw',
    width: '15vw',
    marginTop: '50px',

    display: 'flex',
    flexDirection: 'column',
});

export const CustomNavTop = styled(CustomNavBottom)({
    borderLeft: 'solid 1px #FFFFFF',
});
