import { Typography } from "@mui/material";
import DividerHorizontal from "../DividerHorizontal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import FormLabel from "../FormLabel/FormLabel";
import FormInputText from "../InputText/InputText";
import TypographyText from "../TypographyText";
import TypographyTitle from "../TypographyTitle";
import { CustomTypographyText } from "./Signup.style";
import FormInputCheckbox from "../FormInputCheckbox";
import GreenButton from "../GreenButton/GreenButton";
import GreenNavLink from "../GreenNavLink";
import { ChangeEvent, FormEvent } from "react";
import SignupForm from "../../interfaces/SignupForm";
import { SignupFormProblems } from "../../containers/Signup.container";
import TextLink from "../TextLink";
import { CustomBox, CustomBoxButtons, CustomForm } from "../../pages/signup/Signup.wrapper";

// Interfaces
interface SignupFormProps {
    formData: SignupForm,
    formError: string,
    errorMessage: string,
    formProblems: SignupFormProblems,
    handleSubmit: (e: FormEvent) => void,
    handleChangeInputText: (e: ChangeEvent<HTMLInputElement>) => void,
    handleChangeInputCheckbox: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const SignupFormComponent = ({
    formData,
    formError,
    errorMessage,
    formProblems,
    handleSubmit,
    handleChangeInputText,
    handleChangeInputCheckbox,
}: SignupFormProps) => {


    return (
        <>
            <CustomForm onSubmit={handleSubmit}>
                <TypographyTitle text="CREER UN COMPTE" />
                <TypographyText text="Bienvenue dans le monde des rôlistes !" />
                <TypographyText text="L'aventure t'appelle !" />
                <DividerHorizontal />
                <ErrorMessage text={formError} />
                <CustomBox>
                    <FormLabel label="Nom Utilisateur" htmlFor="username" />
                    <FormInputText 
                        placeholder="Martin4269"
                        name="username" 
                        isPassword={false} 
                        handleChange={handleChangeInputText} 
                        formData={formData} 
                        isEmail={false} 
                        incorrectField={formProblems.username} 
                        isRequired
                    />

                    <FormLabel label="Mot de passe" htmlFor="password" />
                    <FormInputText 
                        placeholder="********"
                        name="password" 
                        isPassword={true} 
                        handleChange={handleChangeInputText} 
                        formData={formData} 
                        isEmail={false} 
                        incorrectField={formProblems.password} 
                        isRequired
                    />

                    <FormLabel label="Confirmation Mot de passe" htmlFor="confirmPassword" />
                    <FormInputText 
                        placeholder="********"
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

                    <FormLabel label="Adresse E-mail" htmlFor="email" />
                    <FormInputText 
                        placeholder="martin4269@exemple.com"
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
                                <TextLink url="/cgu" text="Conditions générales d'utilisation" newTab={true} color="#278527"  /> 
                                {` et la `}
                                <TextLink url="/pc" text="Politique de confidentialité" newTab={true} color="#278527"  />
                            </Typography>
                        } 
                        name="acceptCGU"
                        handleChange={handleChangeInputCheckbox} 
                        formData={formData} 
                    />

                    <ErrorMessage text={errorMessage} />
                    <CustomBoxButtons>
                        <GreenButton 
                            label="S'inscrire"
                            customStyle={{width: '400px', height: '50px'}} 
                            isSubmit={true} 
                        />
                        <CustomTypographyText m="10px 0" >ou</CustomTypographyText>
                        <GreenNavLink label="Aller à l'écran de connexion" width="400" height="50" to="/signin" />
                    </CustomBoxButtons>
                </CustomBox>
            </CustomForm>
        </>
    );
}