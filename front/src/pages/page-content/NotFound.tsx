// React imports
import { FC } from "react";

// Style imports
import * as Styles from '../../styles/NotFound.styles';

// Image imports
import notFoundIllustration from '../../images/404-notfound.png';

// Redux imports
import { useSelector } from "react-redux";

const NotFound: FC = () => {
    const isAuthenticated = useSelector((state: any) => state.auth.authStatus);
    
    return (
        <>
            <Styles.CustomGrid>
                <p>{isAuthenticated ? (<>Connecté</>) : (<>Pas connecté</>)}</p>
                <Styles.CustomTypography>404 - Not found</Styles.CustomTypography>
                <img src={notFoundIllustration} alt="Zelda crying" />
                <Styles.CustomNavLink to="/" >Retour à l'accueil</Styles.CustomNavLink>
            </Styles.CustomGrid>
        </>
    );
}

export default NotFound;