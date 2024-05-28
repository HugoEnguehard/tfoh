// Redux imports
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import UserState from "../interfaces/UserState.interface";
import axios, { AxiosError } from "axios";
import EditUserResult from '../interfaces/EditUserResult';
import ProfileForm from "../interfaces/ProfileForm";
import AccountGeneralForm from "../interfaces/AccountGeneralForm";
import AccountPasswordForm from "../interfaces/AccountPasswordForm";

const initialState: UserState = {
    id: 0,
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    date_creation: '',
    bio: '',
    favorite_jdr: '',
    preference: '',
    profile_picture: {
        file: null,
        fileBase64: '',
        uri: '',
    },
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            state.id = action.payload.id;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.date_creation = action.payload.date_creation;
            state.bio = action.payload.bio;
            state.favorite_jdr = action.payload.favorite_jdr;
            state.preference = action.payload.preference;
            state.profile_picture.uri = action.payload.profile_picture;
        },
        resetUser(state) {
            state = initialState;
        },
    },
    extraReducers: (builder) => {
        
    }
});

export const editUserProfile = createAsyncThunk<EditUserResult, ProfileForm>('user/editProfile', async (formData: ProfileForm) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users/profile`, {
            bio: formData.bio,
            favorite_jdr: formData.favorite_jdr,
        }, { withCredentials: true });

        if(response.status === 200) return { result: true, editedUser: response.data.user };
        else return { result: false };
        
    } catch (error: any) {
        if (error instanceof AxiosError && error.response) return { result: false, message: error.response.data.error }
        else return { result: false, message: error.message }
    }
});

export const editUserAccount = createAsyncThunk<EditUserResult, AccountGeneralForm>('user/editAccount', async (formData: AccountGeneralForm) => {
    try {
        const dataToSend = new FormData();

        dataToSend.append('username', formData.username);
        dataToSend.append('firstname', formData.firstname);
        dataToSend.append('lastname', formData.lastname);
        dataToSend.append('email', formData.email);
        dataToSend.append('preference', formData.preference);
        if (formData.profile_picture.file) dataToSend.append('profile_picture', formData.profile_picture.file);

        const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users/account`, dataToSend, { withCredentials: true })


        if(response.status === 200) return { result: true, editedUser: response.data.user };
        else return { result: false };
        
    } catch (error: any) {
        if (error instanceof AxiosError && error.response) return { result: false, message: error.response.data.error }
        else return { result: false, message: error.message }
    }
});

export const editUserPassword = createAsyncThunk<EditUserResult, AccountPasswordForm>('user/editPassword', async (formData: AccountPasswordForm) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users/password`, {
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword,
        }, { withCredentials: true });

        if(response.status === 200) return { result: true, editedUser: response.data.user };
        else return { result: false };
        
    } catch (error: any) {
        if (error instanceof AxiosError && error.response) return { result: false, message: error.response.data.error }
        else return { result: false, message: error.message }
    }
});

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;