// React imports
import { FC } from "react";

// Style imports
import * as Styles from '../../styles/NotFound.styles';

// Image import
import notFoundIllustration from '../../images/404-notfound.png';

// Material imports
import { Typography } from "@mui/material";

const NotFound: FC = () => {
    return (
        <>
            <Styles.CustomGrid>
                <Styles.CustomTypography>404 - Not found</Styles.CustomTypography>
                <img src={notFoundIllustration} alt="Zelda crying" />
                <Styles.CustomNavLink to="/" >Retour à l'accueil</Styles.CustomNavLink>
            </Styles.CustomGrid>
        </>
    );
}

export default NotFound;