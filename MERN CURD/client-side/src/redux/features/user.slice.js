import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from './user.service';

const initialState = {
    getAllUsers: {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: '',
    },
    updateUser: {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: '',
    },
    createUser: {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: '',
    },
    deleteUser: {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: '',
    },
    getSingleUser: {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: '',
    },
};

// All Users Data 
export const getAllUsers = createAsyncThunk(
    'user/getAllUsers',
    async ({ successCallBack }, thunkAPI) => {
        try {
            const response = await userService.getAllUsers();
            if (response) {
                successCallBack(response);
                return response?.data;
            }
            return thunkAPI.rejectWithValue(response);
        } catch (error) {
            return thunkAPI.rejectWithValue({ payload: error });
        }
    }
);

// Create new Users Data 
export const createUser = createAsyncThunk(
    'user/createUser',
    async ({ payload, successCallBack }, thunkAPI) => {
        try {
            const response = await userService.createUser(payload);
            if (response) {
                successCallBack(response);
                return response?.data;
            }
            return thunkAPI.rejectWithValue(response);
        } catch (error) {
            return thunkAPI.rejectWithValue({ payload: error });
        }
    }
);

// Update User Data 
export const updateUser = createAsyncThunk(
    'user/updateUser',
    async ({id, payload, successCallBack }, thunkAPI) => {
        try {
            const response = await userService.updateUser(id,payload);
            if (response) {
                successCallBack(response);
                return response?.data;
            }
            return thunkAPI.rejectWithValue(response);
        } catch (error) {
            return thunkAPI.rejectWithValue({ payload: error });
        }
    }
);

// Delete User Data 
export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async ({ id, successCallBack }, thunkAPI) => {
        try {
            const response = await userService.deleteUser(id);
            if (response) {
                successCallBack(response);
                return response?.data;
            }
            return thunkAPI.rejectWithValue(response);
        } catch (error) {
            return thunkAPI.rejectWithValue({ payload: error });
        }
    }
);

// Get Single User Data
export const getSingleUser = createAsyncThunk(
    'user/getSingleUser',
    async ({ id, successCallBack }, thunkAPI) => {
        try {
            const response = await userService.getSingleUser(id);
            if (response) {
                successCallBack(response);
                return response?.data;
            }
            return thunkAPI.rejectWithValue(response);
        } catch (error) {
            return thunkAPI.rejectWithValue({ payload: error });
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.getAllUsers.isLoading = true;
                state.getAllUsers.message = '';
                state.getAllUsers.isError = false;
                state.getAllUsers.isSuccess = false;
                state.getAllUsers.data = null;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.getAllUsers.isLoading = false;
                state.getAllUsers.isSuccess = true;
                state.getAllUsers.data = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.getAllUsers.message = action.payload.message;
                state.getAllUsers.isLoading = false;
                state.getAllUsers.isError = true;
                state.getAllUsers.data = null;
            })
            .addCase(createUser.pending, (state) => {
                state.createUser.isLoading = true;
                state.createUser.message = '';
                state.createUser.isError = false;
                state.createUser.isSuccess = false;
                state.createUser.data = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.createUser.isLoading = false;
                state.createUser.isSuccess = true;
                state.createUser.data = action.payload;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.createUser.message = action.payload.message;
                state.createUser.isLoading = false;
                state.createUser.isError = true;
                state.createUser.data = null;
            })
            .addCase(deleteUser.pending, (state) => {
                state.deleteUser.isLoading = true;
                state.deleteUser.message = '';
                state.deleteUser.isError = false;
                state.deleteUser.isSuccess = false;
                state.deleteUser.data = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.deleteUser.isLoading = false;
                state.deleteUser.isSuccess = true;
                state.deleteUser.data = action.payload;
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.deleteUser.message = action.payload.message;
                state.deleteUser.isLoading = false;
                state.deleteUser.isError = true;
                state.deleteUser.data = null;
            })
            .addCase(getSingleUser.pending, (state) => {
                state.getSingleUser.isLoading = true;
                state.getSingleUser.message = '';
                state.getSingleUser.isError = false;
                state.getSingleUser.isSuccess = false;
                state.getSingleUser.data = null;
            })
            .addCase(getSingleUser.fulfilled, (state, action) => {
                state.getSingleUser.isLoading = false;
                state.getSingleUser.isSuccess = true;
                state.getSingleUser.data = action.payload;
            })
            .addCase(getSingleUser.rejected, (state, action) => {
                state.getSingleUser.message = action.payload.message;
                state.getSingleUser.isLoading = false;
                state.getSingleUser.isError = true;
                state.getSingleUser.data = null;
            });

    }
});

export default userSlice.reducer;