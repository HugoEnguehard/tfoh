import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";


export const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;