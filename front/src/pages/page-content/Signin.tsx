// React imports
import { ChangeEvent, FC, useState } from "react";
import FormLabel from "../../components/FormLabel";
import FormInputText from "../../components/FormInputText";
import GreenTextLink from "../../components/GreenTextLink";
import GreenButton from "../../components/GreenButton";
import GreenNavLink from "../../components/GreenNavLink";

// Style imports
import * as Styles from '../../styles/Signin.styles';

// Interfaces
import SigninForm from "../../interfaces/SigninForm";

// Material imports

const Signin: FC = () => {
    const [formData, setFormData] = useState<SigninForm>({
        username: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit');
        console.log(formData);
    }

    const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <Styles.CustomGrid>
            <Styles.CustomForm onSubmit={handleSubmit}>
                <Styles.CustomTypographyTitle>Se connecter</Styles.CustomTypographyTitle>
                <Styles.CustomTypographyText>Bon retour parmi nous !</Styles.CustomTypographyText>
                <Styles.CustomTypographyText>L'heure de l'aventure à sonnée</Styles.CustomTypographyText>
                <Styles.CustomDivider />
                <Styles.CustomBox>
                    <FormLabel label="Nom Utilisateur" htmlFor="username" />
                    <FormInputText placeholder="Martin4269" name="username" isPassword={false} handleChange={handleChangeInputText} formData={formData} />
                    <FormLabel label="Mot de Passe" htmlFor="password" />
                    <FormInputText placeholder="**********" name="password" isPassword={true} handleChange={handleChangeInputText} formData={formData} />
                    <GreenTextLink url="forgetPassword" text="Mot de passe oublié ?" />
                    <Styles.CustomBoxButtons>
                        <GreenButton label={"Connexion"} width={"400"} height={"50"} isSubmit={true} />
                        <Styles.CustomTypographyText m="10px 0" >ou</Styles.CustomTypographyText>
                        <GreenNavLink label={"Créer un compte"} width={"400"} height={"50"} to={"/signup"} />
                    </Styles.CustomBoxButtons>
                </Styles.CustomBox>
            </Styles.CustomForm>
        </Styles.CustomGrid>
    );
}

export default Signin;