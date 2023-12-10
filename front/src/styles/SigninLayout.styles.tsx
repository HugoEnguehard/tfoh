// Material imports
import { Grid, styled } from "@mui/material";

// Image imports
import backgroundImage from '../images/signin-bg.png';

export const CustomGrid = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
    width: '100wh',    
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
});


export const CustomGridContent = styled(Grid)({
    minWidth: '500px',
    width: '40%',
    backgroundColor: '#FFFFFF',
    padding: '20px 10px',
    borderRadius: '10px',
    margin: '100px 0',
});