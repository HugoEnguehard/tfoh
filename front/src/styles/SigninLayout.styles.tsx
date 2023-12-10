// Material imports
import { Grid, styled } from "@mui/material";

// Image imports
import backgroundImage from '../images/signin-bg.png';

export const CustomGrid = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    width: '100wh',    
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
});