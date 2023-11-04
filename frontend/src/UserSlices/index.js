import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const adduser = createAsyncThunk('adduser', async (userdata, thunkAPI) => {
  const url = `${import.meta.env.VITE_BASE_URL}/api/login`;
  try {
    const response = await axios.post(url, userdata, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        return thunkAPI.rejectWithValue('Invalid email and password');
      } else if (error.response.status === 404) {
        return thunkAPI.rejectWithValue('Account not Found Signup Instead !');
      }
    }
    throw error;
  }
});


export const loadUser = createAsyncThunk('loadUser', async () => {
  const url = `${import.meta.env.VITE_BASE_URL}/api/me`;
  try {
    const response = await axios.get(url, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed To Load the User');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
});

export const LogoutUser = createAsyncThunk('LogoutUser', async () => {
  const url = `${import.meta.env.VITE_BASE_URL}/api/logout`;
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed To Logout User');
    }

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



const userslice = createSlice({
  name: 'User',
  initialState: {
    isLoading: false,
    message: '',
    userData: {},
    isAutheticated: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(adduser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = 'Logged In Successfully!';
      state.isAutheticated = true;
      state.userData = action.payload;
      state.error = null;
    });
    builder.addCase(adduser.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(adduser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || 'An error occurred'; 
    });
    
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = 'Loaded User Successfully!';
      state.isAutheticated = true;
      state.userData = action.payload;
      state.error = null;
    });
    builder.addCase(LogoutUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = 'Logout Successfully';
      state.isAutheticated = false;
      state.userData = {};
      state.error = null;
    });
  },
});

export default userslice.reducer;