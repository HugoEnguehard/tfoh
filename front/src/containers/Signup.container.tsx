import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../context/AuthProvider.context";
import SignupForm from "../interfaces/SignupForm";
import { CheckEmail, CheckPassword } from "../utils/formChecks";
import { SignupFormComponent } from "../components/signup/Signup.form";
import { useNavigate } from "react-router-dom";
import { SignupSuccessComponent } from "../components/signup/Signup.success";

export interface SignupFormProblems {
    username: boolean,
    password: boolean,
    confirmPassword: boolean,
    email: boolean,
    acceptCGU: boolean,
}

export const SignupContainer = () => {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [formError, setFormError] = useState<string>('');

    const [isSignupSuccess, setIsSignupSuccess] = useState<boolean>(false);
    
    const [formData, setFormData] = useState<SignupForm>({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        acceptCGU: false,
    });

    const [formProblems, setFormProblems] = useState<SignupFormProblems>({
        username: false,
        password: false,
        confirmPassword: false,
        email: false,
        acceptCGU: false,
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (await checkFormValid()) return;

        const signUpResult = await register(formData);

        if(signUpResult) setErrorMessage(signUpResult);
        else setIsSignupSuccess(true);
    }

    const checkFormValid = async () => {
        let tempFormProblems: SignupFormProblems = {
            username: false,
            password: false,
            email: false,
            confirmPassword: false,
            acceptCGU: false,
        }

        if(formData.password !== formData.confirmPassword) {
            tempFormProblems.password = true;
            tempFormProblems.confirmPassword = true;
            setFormError('Les mots de passe doivent être identiques !');
        }
        else if(!CheckPassword(formData.password)) {
            tempFormProblems.password = true;
            tempFormProblems.confirmPassword = true;
            setFormError('Le mot de passe doit respecter les conditions minimales !');
        }
        if(!CheckEmail(formData.email)) {
            tempFormProblems.email = true;
            setFormError('L\'email doit être au bon format');
        }
        if(!formData.acceptCGU) {
            tempFormProblems.acceptCGU = true;
            setFormError('Vous devez accepter les conditions générales d\'utilisation');
        }

        setFormProblems(tempFormProblems);
        return Object.values(tempFormProblems).some(problem => problem);
    }

    const handleChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleChangeInputCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === 'checkbox') {
            const { checked, name } = e.target;
    
            setFormData({
                ...formData,
                [name]: checked,
            });
        }
    }

    return (
        <>
        {!isSignupSuccess ? (
            <SignupFormComponent 
                formData={formData} 
                formError={formError} 
                errorMessage={errorMessage} 
                formProblems={formProblems} 
                handleSubmit={handleSubmit} 
                handleChangeInputText={handleChangeInputText} 
                handleChangeInputCheckbox={handleChangeInputCheckbox}
            />
        ) : (
            <SignupSuccessComponent />
        )}
        </>
    )
}