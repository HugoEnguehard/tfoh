// Redux imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { AuthState } from "../interfaces/AuthState";

const initialState: AuthState = {
    authStatus: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthStatus(state, action: PayloadAction<boolean>) {
            state.authStatus = action.payload;
        }
    },
    extraReducers: (builder) => {

    }
});

export const { setAuthStatus } = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authReducer;