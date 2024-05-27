// React imports
import TypographyText from "../components/TypographyText";
import DividerHorizontal from "../components/DividerHorizontal";
import { AccountGeneralFormComponent } from "../components/account/Account.generalForm";
import { AccountPasswordFormComponent } from "../components/account/Account.passwordForm";

// Style imports
import {
    CustomGrid,
} from '../components/account/Account.styles';
import { useAppDispatch, useAppSelector } from "../store/store";
import UserState from "../interfaces/UserState.interface";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import AccountGeneralForm from "../interfaces/AccountGeneralForm";
import { editUserAccount, editUserPassword, editUserProfile, setUser } from "../store/userSlice";
import EditUserResult from "../interfaces/EditUserResult";
import AccoundPasswordForm from "../interfaces/AccountPasswordForm";
import { CheckPassword } from "../utils/formChecks";
import axios from "axios";


export const AccountContainer = () => {
    const dispatch = useAppDispatch();

    const userData: UserState = useAppSelector((state: any) => state.user);

    const [isGeneralUpdated, setIsGeneralUpdated] = useState<boolean>(false);
    const [isPasswordUpdated, setIsPasswordUpdated] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    
    const [formDataGeneral, setFormDataGeneral] = useState<AccountGeneralForm>({
        firstname: '',
        lastname:  '',
        email: '',
        username: '',
        profilePicture: '',
        preference: '-',
    });

    const [formDataPassword, setFormDataPassword] = useState<AccoundPasswordForm>({
        newPassword: '',
        confirmPassword: '',
        oldPassword: '',
    });

    useEffect(() => {        
        setFormDataGeneral({
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            username: userData.username,
            profilePicture: userData.profilePicture,
            preference: userData.preference ? userData.preference : '-',
        });
    }, [userData]);

    const handleSubmitGeneral = async (e: FormEvent) => {
        e.preventDefault();

        const editUserResult = await dispatch(editUserAccount(formDataGeneral));

        if(editUserAccount.fulfilled.match(editUserResult)) {
            const editUserData = editUserResult.payload as EditUserResult;
            if (editUserData.result && editUserData.editedUser) {
                setIsGeneralUpdated(true);
                dispatch(setUser(editUserData.editedUser));
            }
            else setErrorMessage(editUserData.message as string);
        }
    }

    const handleInputGeneral = (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { value, name } = e.target;
        setIsGeneralUpdated(false);

        setFormDataGeneral({
            ...formDataGeneral,
            [name]: value,
        });
    }

    const handleChangeFileImage = (name: string, value: string) => {
        setIsGeneralUpdated(false);
        // Mettre à jour formData avec le base64 du fichier
        setFormDataGeneral(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }


    const handleSubmitPassword = async (e: FormEvent) => {
        e.preventDefault();
        
        if(formDataPassword.newPassword === formDataPassword.confirmPassword) {
            if(CheckPassword(formDataPassword.newPassword)) {
                try {
                    const editPasswordResult = await dispatch(editUserPassword(formDataPassword));

                    if(editUserPassword.fulfilled.match(editPasswordResult)) {
                        const editUserData = editPasswordResult.payload as EditUserResult;
                        if (editUserData.result && editUserData.editedUser) {
                            setIsPasswordUpdated(true);
                            setFormDataPassword({ oldPassword: '', newPassword: '', confirmPassword: '' });
                            setErrorMessage('');
                        }
                        else setErrorMessage(editUserData.message as string);
                    }
                } catch (error: any) {
                    if (error.response && (error.response.status === 401 || error.response.status === 402)) setErrorMessage(error.response.data);
                    else setErrorMessage(error.message);
                }
            }
            else setErrorMessage("Le nouveau mots de passe doit respecter les conditions minimales");
        }
        else setErrorMessage("Les mots de passe doivent être identiques");
    }

    const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setIsPasswordUpdated(false);

        setFormDataPassword({
            ...formDataPassword,
            [name]: value,
        });
    }

    return (
        <CustomGrid>
            <TypographyText text="Mes informations personnelles" isHyliaSerif size="24"/>
            <DividerHorizontal />
            <AccountGeneralFormComponent 
                errorMessage={errorMessage}
                isGeneralUpdated={isGeneralUpdated}
                formDataGeneral={formDataGeneral} 
                handleInputGeneral={handleInputGeneral}
                handleSubmitGeneral={handleSubmitGeneral}
                handleChangeFileImage={handleChangeFileImage}
            />
            <br />
            <TypographyText text="Mot de passe" isHyliaSerif size="24"/>
            <DividerHorizontal />
            <AccountPasswordFormComponent 
                errorMessage={errorMessage} 
                isPasswordUpdated={isPasswordUpdated} 
                formDataPassword={formDataPassword} 
                handleSubmitPassword={handleSubmitPassword} 
                handleInputPassword={handleInputPassword}            
            />
        </CustomGrid>
    );
}