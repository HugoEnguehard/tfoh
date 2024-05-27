// React imports
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Interfaces
import AuthUserResult from "../interfaces/AuthUserResult.interface";
import UserDataLogin from "../interfaces/UserDataLogin.interface";
import AuthState from "../interfaces/AuthState.interface";

// Other imports
import axios, { AxiosError } from "axios";
import SignupUserResult from "../interfaces/SignupUserResult.interface";
import SignupData from "../interfaces/SignupData.interface";

const initialState: AuthState = {
    authStatus: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthStatus(state, action) {
            state.authStatus = action.payload;
        }
    }
});

export const authentificateUser = createAsyncThunk<
    AuthUserResult,
    UserDataLogin
>("auth/authentificate", async (userData: UserDataLogin) => {
    try {
        const apiResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/signin`, {
            username: userData.username,
            password: userData.password,
        }, { withCredentials: true });

        if (apiResponse.status === 200) return { result: true }
        else return { result: false }

    } catch (error: any) {
        if (error instanceof AxiosError && error.response) return { result: false, message: error.response.data.message }
        else return { result: false, message: error.message }
    }
})

export const registerUser = createAsyncThunk<
    SignupUserResult,
    SignupData
>("auth/register", async (userData: SignupData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`, userData)

        if(response.status === 200) return { response: true }
        else return { response: false, message: "Une erreur est survenue" }
    } catch (error: any) {
        if (error instanceof AxiosError && error.response) return { result: false, message: error.response.data.error }
        else return { result: false, message: error.message }
    }
})

export const logoutUser = createAsyncThunk("auth/logout", async () => {
    try {
        const apiResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/logout`, {}, { withCredentials: true })
        if (apiResponse.status === 200) return true
        else return false
    } catch (error) {
        return false
    }
})

export default authSlice.reducer;