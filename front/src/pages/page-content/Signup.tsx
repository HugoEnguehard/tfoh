// React imports
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TypographyTitle from "../../components/TypographyTitle";
import TypographyText from "../../components/TypographyText";
import DividerHorizontal from "../../components/DividerHorizontal";
import GreenButton from "../../components/GreenButton";
import GreenNavLink from "../../components/GreenNavLink";
import FormInputCheckbox from "../../components/FormInputCheckbox";
import GreenTextLink from "../../components/GreenTextLink";
import FormErrorMessage from "../../components/FormErrorMessage";
import SignupForm from "../../interfaces/SignupForm";
import FormLabel from "../../components/FormLabel";
import FormInputText from "../../components/FormInputText";

// Redux imports
import { useAppDispatch } from "../../store/store";
import { signUp } from "../../store/authSlice";
import { setUser } from "../../store/userSlice";

// Style imports
import * as Styles from '../../styles/Signup.styles';

// Interfaces
import SignUpResult from "../../interfaces/SignUpResult.store";

// Material imports
import { Typography } from "@mui/material";

const Signup: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    
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

        console.log(formData);

        if(formData.password !== formData.confirmPassword) {
            setFormProblems({...formProblems, password: true, confirmPassword: true});
            setFormError('Les mots de passe doivent être identiques !');
            return;
        }
        else setFormProblems({...formProblems, password: false, confirmPassword: false});

        const signUpResult = await dispatch(signUp(formData));

        if(signUp.fulfilled.match(signUpResult)) {
            const signupData = signUpResult.payload as SignUpResult;
            if(signupData.success && signupData.user) {
                dispatch(setUser({
                    username: signupData.user.username,
                    email: signupData.user.email,
                    profilePicture: signupData.user.profilePicture,
                }));
                navigate("/")
            }
            else if(signupData.message) {
                setFormError(signupData.message);
            } 
            else console.log("An unattended error occured");
        }
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
                <FormErrorMessage text={formError} />
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
                    />

                    <FormLabel label={"Adesse E-mail"} htmlFor={"email"} />
                    <FormInputText 
                        placeholder={"martin4269@exemple.com"} 
                        name="email" 
                        isPassword={false} 
                        handleChange={handleChangeInputText} 
                        formData={formData} 
                        isEmail={true} 
                        incorrectField={formProblems.email} 
                    />
                
                    <FormInputCheckbox 
                        label={
                            <Typography>
                                {`J'accepte les `}
                                <GreenTextLink url={"cgu"} text={"Conditions générales d'utilisation"} newTab={true} /> 
                                {` et la `}
                                <GreenTextLink url={"pc"} text={"Politique de confidentialité"} newTab={true} />
                            </Typography>
                        } 
                        name={"acceptCGU"} 
                        handleChange={handleChangeInputCheckbox} 
                        formData={formData} 
                    />

                    <Styles.CustomBoxButtons>
                        <GreenButton label={"S'inscrire"} width={"400"} height={"50"} isSubmit={true} />
                        <Styles.CustomTypographyText m="10px 0" >ou</Styles.CustomTypographyText>
                        <GreenNavLink label={"Aller à l'écran de connexion"} width={"400"} height={"50"} to={"/signin"} />
                    </Styles.CustomBoxButtons>
                </Styles.CustomBox>
            </Styles.CustomForm>
        </>
    );
}

export default Signup;