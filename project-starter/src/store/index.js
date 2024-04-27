import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/users/user.slice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
