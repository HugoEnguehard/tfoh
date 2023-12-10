// Redux imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { UserState } from "../interfaces/UserState";

const initialState: UserState = {
    username: '',
    profilePicture: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ username: string, profilePicture: string }>) {
            state.username = action.payload.username;
            state.profilePicture = action.payload.profilePicture;
        },
        resetUser(state) {
            state.username = '';
            state.profilePicture = '';
        },
    },
    extraReducers: (builder) => {
        // Gérer les reducers supplémentaires si nécessaire
    }
});

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;