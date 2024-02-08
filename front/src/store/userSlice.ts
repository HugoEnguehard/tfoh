// Redux imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { UserState } from "../interfaces/UserState";

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
        // Gérer les reducers supplémentaires si nécessaire
    }
});

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;