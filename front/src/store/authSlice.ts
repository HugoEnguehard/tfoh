// Redux imports
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Test data
import pp_b64 from "../data_test/pp_b64";

// Interfaces
import { AuthState } from "../interfaces/AuthState";
import SigninForm from "../interfaces/SigninForm";
import SignInResult from "../interfaces/SignInResult.store";
import SignOutResult from "../interfaces/SignOutResult.store";
import SignupForm from "../interfaces/SignupForm";
import SignUpResult from "../interfaces/SignUpResult.store";

// Other imports
import axios from 'axios';

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
        builder.addCase(signUp.fulfilled, (state, action) => {
            if(action.payload.success) state.authStatus = true;
            else state.authStatus = false;
        });
        builder.addCase(signIn.fulfilled, (state, action) => {
            if(action.payload.success) state.authStatus = true;
            else state.authStatus = false;
        });
        builder.addCase(signOut.fulfilled, (state, action) => {
            if(action.payload.success) state.authStatus = false;
        });
    }
});

export const signUp = createAsyncThunk<SignUpResult, SignupForm>(
    "auth/signUp",
    async(formData: SignupForm) => 
    {
        try {
            const response = await axios.post('http://localhost:3050/api/users/signup', {
                username: formData.username,
                password: formData.password,
                email: formData.email,
            });

            if(response.status === 200) return { success: true, user: response.data.user }
            else return { success: false, message: response.data.message };
        } catch (error: any) {            
            return axios.isAxiosError(error)
                ? (error.response && (error.response.status === 401 || error.response.status === 402 || error.response.status === 403)
                    ? { success: false, message: error.response.data }
                    : { success: false, message: error.message })
                : { success: false, message: error.message };
        }
    }
)

export const signIn = createAsyncThunk<SignInResult, SigninForm>(
    "auth/signIn",
    async (formData: SigninForm) => 
    {
        try {
            const response = await axios.post('http://localhost:3050/api/users/signin', {
                username: formData.username,
                password: formData.password,
            });
            
            if (response.status === 200) return { success: true, user: response.data.user };
            else return { success: false, message: response.data.message };
        } catch (error: any) {
            return axios.isAxiosError(error)
                ? (error.response && error.response.status === 401
                    ? { success: false, message: error.response.data }
                    : { success: false, message: error.message })
                : { success: false, message: error.message };
        }
    }
);

export const signOut = createAsyncThunk<SignOutResult> (
    "auth/signOut",
    async () => 
    {
        try {
            return { success: true }
        } catch (error: any) {
            return { success: false, message: error.message }
        }
    }
);

export const { setAuthStatus } = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authReducer;