// React imports
import { FC } from 'react';
import GreenNavLink from '../../components/GreenNavLink';

// Image import
import illustrationImage from '../../images/couverture.png';

// Style imports
import * as Styles from '../../styles/Landing.styles';

const Landing: FC = () => {
    return (
        <>
            <Styles.CustomGrid>
                <Styles.CustomBoxLeft>
                    <Styles.CustomTypographyTitle>On s'occupe de la technique,</Styles.CustomTypographyTitle>
                    <Styles.CustomTypographyTitle mb="20px">Vous lancez les dés !</Styles.CustomTypographyTitle>
                    <GreenNavLink label={'Créer un compte'} width={'250'} height={'60'} to={'/signup'} />
                    <Styles.CustomTypographyText mt="40px">Créez et gérez facilement vos campagnes et personnages pour une expérience de JDR optimale sur The Legend of Zelda : The Fall of Hyrule !</Styles.CustomTypographyText>
                </Styles.CustomBoxLeft>
                <Styles.CustomBoxRight>
                    <Styles.CustomTypographyText ml="10px" mb="10px">L'aventure vous attend...</Styles.CustomTypographyText>
                    <img src={illustrationImage} alt="Link in front of ruins" style={{width: '100%'}} />
                </Styles.CustomBoxRight>
            </Styles.CustomGrid>
        </>
    )
}

export default Landing;