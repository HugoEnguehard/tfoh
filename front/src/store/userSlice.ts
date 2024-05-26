// Redux imports
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import UserState from "../interfaces/UserState.interface";
import axios from "axios";
import EditUserResult from '../interfaces/EditUserResult';
import ProfileForm from "../interfaces/ProfileForm";

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
    profilePicture: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.id = action.payload.id;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.date_creation = action.payload.date_creation;
            state.bio = action.payload.bio;
            state.favorite_jdr = action.payload.favorite_jdr;
            state.preference = action.payload.preference;
            state.profilePicture = action.payload.profilePicture;
        },
        resetUser(state) {
            state = initialState;
            // state.id = 0;
            // state.firstname = '';
            // state.lastname = '';
            // state.username = '';
            // state.email = '';
            // state.date_creation = '';
            // state.bio = '';
            // state.favorite_jdr = '';
            // state.preference = '';
            // state.profilePicture = '';
        },
    },
    extraReducers: (builder) => {
        
    }
});

export const editUserProfile = createAsyncThunk<EditUserResult, UserState>('user/editProfile', async (formData: ProfileForm) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users/profile`, {
            bio: formData.bio,
            favorite_jdr: formData.favorite_jdr,
        }, { withCredentials: true });

        if(response.status === 200) return { success: true, editedUser: response.data.user };
        else return { success: false, message: response.data.error };
        
    } catch (error: any) {
        return axios.isAxiosError(error)
            ? (error.response && (error.response.status === 401 || error.response.status === 402)
                ? { success: false, message: error.response.data.error }
                : { success: false, message: error.message })
            : { success: false, message: error.message };
    }
})

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;