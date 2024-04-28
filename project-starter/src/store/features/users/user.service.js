import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../utils/constants/baseURL';
import api from '../../../utils/constants/Api';

const getUsers = createAsyncThunk('user/getUsers', async (data, { rejectWithValue }) => {
  try {
    const response = await api.get(`${config.ENDPOINTS.USERS}`, data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { getUsers };
