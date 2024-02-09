// Redux imports
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { UserState } from "../interfaces/UserState";
import axios from "axios";
import EditUserResult from '../interfaces/EditUserResult';

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
            state.id = 0;
            state.firstname = '';
            state.lastname = '';
            state.username = '';
            state.email = '';
            state.date_creation = '';
            state.bio = '';
            state.favorite_jdr = '';
            state.preference = '';
            state.profilePicture = '';
        },
    },
    extraReducers: (builder) => {
        
    }
});

export const editUser = createAsyncThunk<EditUserResult, UserState>('user/edit', async (formData: UserState) => {
    try {
        const response = await axios.put('http://localhost:3050/api/users/edit', {
            id: formData.id,
            firstname: formData.firstname,
            lastname: formData.lastname,
            username: formData.username,
            email: formData.email,
            bio: formData.bio,
            favorite_jdr: formData.favorite_jdr,
            preference: formData.preference,
            profilePicture: formData.profilePicture,
        });

        if(response.status === 200) return { success: true, editedUser: response.data.user };
        else return { success: false, message: response.data.message };
        
    } catch (error: any) {
        return axios.isAxiosError(error)
            ? (error.response && (error.response.status === 401 || error.response.status === 402)
                ? { success: false, message: error.response.data }
                : { success: false, message: error.message })
            : { success: false, message: error.message };
    }
})

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;