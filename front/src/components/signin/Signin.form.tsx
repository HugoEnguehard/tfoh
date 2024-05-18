import TypographyTitle from "../TypographyTitle";
import TypographyText from "../TypographyText";
import DividerHorizontal from "../DividerHorizontal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import FormLabel from "../FormLabel/FormLabel";
import FormInputText from "../InputText/InputText";
import GreenButton from "../GreenButton/GreenButton";
import GreenNavLink from "../GreenNavLink";
import { CustomBox, CustomBoxButtons, CustomForm } from "../../pages/signin/Signin.wrapper";
import TextLink from "../TextLink";
import { FormEvent } from "react";

// Interfaces
import SigninForm from "../../interfaces/SigninForm";
import { CustomTypographyText } from "./Signin.styles";

interface SigninFormProps {
    handleSubmit: (e: FormEvent) => void,
    handleChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void,
    errorMessage: string,
    formData: SigninForm,
}

const SigninFormComponent = ({
    handleSubmit,
    handleChangeInputText,
    errorMessage,
    formData,
}: SigninFormProps) => {
    return (
        <CustomForm onSubmit={handleSubmit}>
            <TypographyTitle text="SE CONNECTER" />
            <TypographyText text="Bon retour parmi nous !" />
            <TypographyText text="L'heure de l'aventure à sonnée" />
            <DividerHorizontal />
            <ErrorMessage text={errorMessage} />
            <CustomBox>
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
                <CustomBoxButtons>
                    <GreenButton 
                        label={"Connexion"}
                        customStyle={{width: '400px', height: '50px'}}
                        isSubmit={true} 
                    />
                    <CustomTypographyText m="10px 0" >ou</CustomTypographyText>
                    <GreenNavLink label={"Créer un compte"} width={"400"} height={"50"} to={"/signup"} />
                </CustomBoxButtons>
            </CustomBox>
        </CustomForm>
    )
}

export default SigninFormComponent;