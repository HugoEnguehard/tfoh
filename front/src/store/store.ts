// Redux imports
import storage from 'redux-persist/lib/storage';
import rootReducer from "./rootReducer";

// Redux persistor imports
import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;