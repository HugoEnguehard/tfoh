// React imports
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TypographyTitle from "../../components/TypographyTitle";
import TypographyText from "../../components/TypographyText";
import DividerHorizontal from "../../components/DividerHorizontal";
import GreenButton from "../../components/GreenButton/GreenButton";
import GreenNavLink from "../../components/GreenNavLink";
import FormInputCheckbox from "../../components/FormInputCheckbox";
import TextLink from "../../components/TextLink";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SignupForm from "../../interfaces/SignupForm";
import FormLabel from "../../components/FormLabel/FormLabel";
import FormInputText from "../../components/InputText/InputText";

// Style imports
import * as Styles from '../../styles/Signup.styles';

// Material imports
import { Typography } from "@mui/material";
import { CheckPassword } from "../../utils/password";
import { useAuth } from "../../context/AuthProvider.context";

const Signup: FC = () => {
    const { register } = useAuth();
    const [errorMessage, setErrorMessage] = useState<string>("");
    
    const [formData, setFormData] = useState<SignupForm>({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        acceptCGU: false,
    });

    const [formProblems, setFormProblems] = useState({
        username: false,
        password: false,
        confirmPassword: false,
        email: false,
        acceptCGU: false,
    });

    const [formError, setFormError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(formData.password !== formData.confirmPassword) {
            setFormProblems({...formProblems, password: true, confirmPassword: true});
            setFormError('Les mots de passe doivent être identiques !');
            return;
        }
        else if(!CheckPassword(formData.password)) {
            setFormProblems({...formProblems, password: true, confirmPassword: true});
            setFormError('Le mot de passe doit respecter les conditions minimales !');
            return;
        }
        else setFormProblems({...formProblems, password: false, confirmPassword: false});

        const signUpResult = await register(formData);

        if(signUpResult) setErrorMessage(signUpResult);
    }

    const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleChangeInputCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === 'checkbox') {
            const { checked, name } = e.target;
    
            setFormData({
                ...formData,
                [name]: checked,
            });
        }
    };
    

    return (
        <>
            <Styles.CustomForm onSubmit={handleSubmit}>
                <TypographyTitle text="CREER UN COMPTE" />
                <TypographyText text="Bienvenue dans le monde des rôlistes !" />
                <TypographyText text="L'aventure t'appelle !" />
                <DividerHorizontal />
                <ErrorMessage text={formError} />
                <Styles.CustomBox>
                    <FormLabel label={"Nom Utilisateur"} htmlFor={"username"} />
                    <FormInputText 
                        placeholder={"Martin4269"} 
                        name="username" 
                        isPassword={false} 
                        handleChange={handleChangeInputText} 
                        formData={formData} 
                        isEmail={false} 
                        incorrectField={formProblems.username} 
                        isRequired
                    />

                    <FormLabel label={"Mot de passe"} htmlFor={"password"} />
                    <FormInputText 
                        placeholder={"********"} 
                        name="password" 
                        isPassword={true} 
                        handleChange={handleChangeInputText} 
                        formData={formData} 
                        isEmail={false} 
                        incorrectField={formProblems.password} 
                        isRequired
                    />

                    <FormLabel label={"Confirmation Mot de passe"} htmlFor={"confirmPassword"} />
                    <FormInputText 
                        placeholder={"********"} 
                        name="confirmPassword" 
                        isPassword={true} 
                        handleChange={handleChangeInputText} 
                        formData={formData} 
                        isEmail={false} 
                        incorrectField={formProblems.confirmPassword} 
                        isRequired
                    />

                    <Typography 
                        style={{fontSize: '14px', color: '#707070', fontFamily: 'Hylia Serif'}}
                    >
                        Le mot de passe doit au moins contenir :
                    </Typography>
                    <ul
                        style={{fontSize: '14px', color: '#707070', fontFamily: 'Hylia Serif'}}
                    >
                        <li>1 majuscule</li>
                        <li>1 minuscule</li>
                        <li>1 chiffre</li>
                        <li>1 caractère spécial</li>
                        <li>8 caractères minimum</li>
                        <li>30 caractères maximum</li>
                    </ul>

                    <FormLabel label={"Adesse E-mail"} htmlFor={"email"} />
                    <FormInputText 
                        placeholder={"martin4269@exemple.com"} 
                        name="email" 
                        isPassword={false} 
                        handleChange={handleChangeInputText} 
                        formData={formData} 
                        isEmail={true} 
                        incorrectField={formProblems.email} 
                        isRequired
                    />
                
                    <FormInputCheckbox 
                        label={
                            <Typography>
                                {`J'accepte les `}
                                <TextLink url={"/cgu"} text={"Conditions générales d'utilisation"} newTab={true} color="#278527"  /> 
                                {` et la `}
                                <TextLink url={"/pc"} text={"Politique de confidentialité"} newTab={true} color="#278527"  />
                            </Typography>
                        } 
                        name={"acceptCGU"} 
                        handleChange={handleChangeInputCheckbox} 
                        formData={formData} 
                    />

                    <Styles.CustomBoxButtons>
                        <GreenButton 
                            label={"S'inscrire"} 
                            customStyle={{width: '400px', height: '50px'}} 
                            isSubmit={true} 
                        />
                        <Styles.CustomTypographyText m="10px 0" >ou</Styles.CustomTypographyText>
                        <GreenNavLink label={"Aller à l'écran de connexion"} width={"400"} height={"50"} to={"/signin"} />
                    </Styles.CustomBoxButtons>
                </Styles.CustomBox>
            </Styles.CustomForm>
        </>
    );
}

export default Signup;