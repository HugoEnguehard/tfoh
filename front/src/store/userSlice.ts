// Redux imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { UserState } from "../interfaces/UserState";
import pp_b64 from "../data_test/pp_b64";

const initialState: UserState = {
    pseudo: '',
    profilePicture: pp_b64,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ pseudo: string, profilePicture: string }>) {
            state.pseudo = action.payload.pseudo;
            state.profilePicture = action.payload.profilePicture;
        }
    },
    extraReducers: (builder) => {
        // Gérer les reducers supplémentaires si nécessaire
    }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;