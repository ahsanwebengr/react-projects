import { configureStore } from '@reduxjs/toolkit';
import { api } from '../rtk/services/Api';

const store = configureStore({
  reducer: {
    // ... other reducers
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export default store;
