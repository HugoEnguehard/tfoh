// Image imports
import backgroundImage from '../images/site-background.png';

// Material imports
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

// Custom components
export const CustomGrid = styled(Grid)({
    display: 'flex',
    width: '100%',
    height: '80vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
});