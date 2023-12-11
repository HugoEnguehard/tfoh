// Redux imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { UserState } from "../interfaces/UserState";

const initialState: UserState = {
    username: '',
    email: '',
    profilePicture: '',
    preference: '',
    bio: '',
    lovedJdr: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ username: string, email: string, profilePicture: string, preference: string, bio: string, lovedJdr: string }>) {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.profilePicture = action.payload.profilePicture;
            state.preference = action.payload.preference;
            state.bio = action.payload.bio;
            state.lovedJdr = action.payload.lovedJdr;
        },
        resetUser(state) {
            state.username = '';
            state.email = '';
            state.profilePicture = '';
            state.preference = '';
            state.bio = '';
            state.lovedJdr = '';
        },
    },
    extraReducers: (builder) => {
        // Gérer les reducers supplémentaires si nécessaire
    }
});

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;