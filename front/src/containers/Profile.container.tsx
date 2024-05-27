// React imports
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ProfileMain } from "../components/profile/Profile.main";

// Redux imports
import { useAppDispatch, useAppSelector } from "../store/store";
import { editUserProfile, setUser } from "../store/userSlice";
// Interfaces
import EditUserResult from "../interfaces/EditUserResult";
import UserState from "../interfaces/UserState.interface";
import ProfileForm from "../interfaces/ProfileForm";

export const ProfileContainer = () => {
    const dispatch = useAppDispatch();
    
    const userData: UserState = useAppSelector((state: any) => state.user);

    const [validationMessage, setValidationMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isFormUpdated, setIsFormUpdated] = useState<boolean>(false);
    const [formData, setFormData] = useState<ProfileForm>({
        bio: "",
        favorite_jdr: "",
    });

    useEffect(() => {
        setFormData({
            bio: userData.bio || "",
            favorite_jdr: userData.favorite_jdr || "",
        });
    }, [userData]);

    const handleInputText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setIsFormUpdated(false);

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const dataToSend = {
            ...userData,
            ...formData,
        }

        const editUserResult = await dispatch(editUserProfile(dataToSend));

        if(editUserProfile.fulfilled.match(editUserResult)) {
            const editUserData = editUserResult.payload as EditUserResult;
            if (editUserData.result && editUserData.editedUser) {
                setIsFormUpdated(true);
                dispatch(setUser(editUserData.editedUser));
                setValidationMessage("Profil mis à jour !");
            }
            else setErrorMessage(editUserData.message as string);
        }
    }

    return (
        <ProfileMain 
            userData={userData} 
            errorMessage={errorMessage} 
            formData={formData} 
            isFormUpdated={isFormUpdated} 
            validationMessage={validationMessage} 
            handleSubmit={handleSubmit} 
            handleInputText={handleInputText}
        />
    );
}