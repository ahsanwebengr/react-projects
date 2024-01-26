import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features//user.slice';

const store = configureStore({
    reducer: {
        user: userReducer,
    }
});

export default store;