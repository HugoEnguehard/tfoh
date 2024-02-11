// React imports
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLabel from "../../components/FormLabel/FormLabel";
import FormInputText from "../../components/InputText/InputText";
import GreenButton from "../../components/GreenButton/GreenButton";
import GreenNavLink from "../../components/GreenNavLink";
import TypographyTitle from "../../components/TypographyTitle";
import TypographyText from "../../components/TypographyText";
import DividerHorizontal from "../../components/DividerHorizontal";
import TextLink from "../../components/TextLink";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

// Redux imports
import { useAppDispatch } from "../../store/store";
import { signIn } from "../../store/authSlice";
import { setUser } from "../../store/userSlice";

// Style imports
import * as Styles from '../../styles/Signin.styles';

// Interfaces
import SigninForm from "../../interfaces/SigninForm";
import SignInResult from "../../interfaces/SignInResult.store";

// Material imports

const Signin: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const [formData, setFormData] = useState<SigninForm>({
        username: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const signInResult = await dispatch(signIn(formData));

        if(signIn.fulfilled.match(signInResult)) {
            const signinData = signInResult.payload as SignInResult;
            if (signinData.success && signinData.user) {
                dispatch(setUser(signinData.user));
                navigate("/profile");
            }
            else setErrorMessage(signinData.message as string);
        }
    }

    const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <Styles.CustomForm onSubmit={handleSubmit}>
            <TypographyTitle text="SE CONNECTER" />
            <TypographyText text="Bon retour parmi nous !" />
            <TypographyText text="L'heure de l'aventure à sonnée" />
            <DividerHorizontal />
            <ErrorMessage text={errorMessage} />
            <Styles.CustomBox>
                <FormLabel label="Nom Utilisateur" htmlFor="username" />
                <FormInputText 
                    placeholder="Martin4269" 
                    name="username" 
                    isPassword={false} 
                    handleChange={handleChangeInputText} 
                    formData={formData} 
                    isEmail={false} 
                    incorrectField={false} 
                    isRequired
                />
                <FormLabel label="Mot de Passe" htmlFor="password" />
                <FormInputText 
                    placeholder="**********" 
                    name="password" 
                    isPassword={true} 
                    handleChange={handleChangeInputText} 
                    formData={formData} 
                    isEmail={false} 
                    incorrectField={false} 
                    isRequired
                />
                <TextLink url="/forgetPassword" text="Mot de passe oublié ?" color="#278527" />
                <Styles.CustomBoxButtons>
                    <GreenButton 
                        label={"Connexion"}
                        customStyle={{width: '400px', height: '50px'}}
                        isSubmit={true} 
                    />
                    <Styles.CustomTypographyText m="10px 0" >ou</Styles.CustomTypographyText>
                    <GreenNavLink label={"Créer un compte"} width={"400"} height={"50"} to={"/signup"} />
                </Styles.CustomBoxButtons>
            </Styles.CustomBox>
        </Styles.CustomForm>
    );
}

export default Signin;