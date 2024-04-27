import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../utils/constants/Api';
import config from '../../../utils/constants/baseURL';

const getUsers = createAsyncThunk('user/getUsers', async (data, { rejectWithValue }) => {
  try {
    const response = await api.get(`${config.ENDPOINTS.USERS}`, data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { getUsers };
