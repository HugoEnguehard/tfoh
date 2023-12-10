// Redux imports
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Test data
import pp_b64 from "../data_test/pp_b64";

// Interfaces
import { AuthState } from "../interfaces/AuthState";
import SigninForm from "../interfaces/SigninForm";
import SignInResult from "../interfaces/SignInResult.store";
import SignOutResult from "../interfaces/SignOutResult.store";

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
        builder.addCase(signIn.fulfilled, (state, action) => {
            if(action.payload.success) state.authStatus = true;
            else state.authStatus = false;
        });
        builder.addCase(signOut.fulfilled, (state, action) => {
            if(action.payload.success) state.authStatus = false;
        });
    }
});

export const signIn = createAsyncThunk<SignInResult, SigninForm>(
    "auth/signIn",
    async (formData: SigninForm) => {
        try {
            // TODO : API REQUEST
            
            return {
                success: true,
                user: {
                    username: formData.username,
                    profilePicture: pp_b64,
                }
            }

        } catch (error: any) {
            return {
                success: false,
                message: error.message,
            }
        }
    }
);

export const signOut = createAsyncThunk<SignOutResult> (
    "auth/signOut",
    async () => {
        try {
            // TODO : API REQUEST

            return {
                success: true,
            }
        } catch (error: any) {
            return {
                success: false,
                message: error.message,
            }
        }
    }
);

export const { setAuthStatus } = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authReducer;