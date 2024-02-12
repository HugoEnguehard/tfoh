// React imports
import { FC } from "react";

// Style imports
import * as Styles from './SigninLayoutHeader.styles';


const SigninLayoutHeader: FC = () => {
    return (
        <Styles.CustomGrid>
            <Styles.CustomNavLink to="/"><span style={{textDecoration: 'underline'}}>The Legend of Zelda :</span> The Fall of Hyrule</Styles.CustomNavLink>
        </Styles.CustomGrid>
    );
}

export default SigninLayoutHeader;