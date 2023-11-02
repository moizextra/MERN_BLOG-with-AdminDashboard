import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBlogsDetails = createAsyncThunk('getBlogsDetails', async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/content/${id}`);
      return response.json();
    } catch (error) {
      throw error;
    }
  });

const blogslice = createSlice({
  name: 'Blog',
  initialState: {
    isLoading: false,
  BlogDetails:null
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogsDetails.fulfilled, (state, action) => {
      console.log(action.payload);
      state.BlogDetails = action.payload;
    });
    builder.addCase(getBlogsDetails.pending, (state, action) => {
    
    });
    builder.addCase(getBlogsDetails.rejected, (state, action) => {
   
    });
  }
});

export default blogslice.reducer;