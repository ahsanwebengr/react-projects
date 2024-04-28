import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../utils/constants/baseURL';
import axios from 'axios';

const getUsers = createAsyncThunk('user/getUsers', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${config.BASE_URL}${config.ENDPOINTS.USERS}`, data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { getUsers };
