import SigninForm from "../interfaces/SigninForm";
import { useState } from "react";
import SigninFormComponent from "../components/signin/Signin.form";
import { useAuth } from "../context/AuthProvider.context";


export const SigninContainer = () => {
    const { login } = useAuth();
    
    const [formData, setFormData] = useState<SigninForm>({
        username: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const signInResult = await login(formData.username, formData.password);

        // console.log(signInResult)

        if(signInResult) setErrorMessage(signInResult);
    }

    const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <SigninFormComponent 
            handleSubmit={handleSubmit} 
            handleChangeInputText={handleChangeInputText} 
            errorMessage={errorMessage} 
            formData={formData}        
        />
    );
}