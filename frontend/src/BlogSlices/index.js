import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBlogs = createAsyncThunk('getBlogs', async ( ) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/content`);
    return response.json();
  } catch (error) {
    throw error;
  }
});


const blogslice = createSlice({
  name: 'Blog',
  initialState: {
    isLoading: false,
    Blogs: [],
    message: "",
    BlogCount: 0,
    error: null, // Add an error field to your initial state
    resultPerPage:0
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.isLoading = false; // Set isLoading to false on success
      state.Blogs = action.payload.Blogs;
      state.BlogCount = action.payload.BlogCount;
      state.message = action.payload.message;
      state.resultPerPage = action.payload.resultperpage;
      state.error = null; 
    });
    builder.addCase(getBlogs.pending, (state, action) => {
      state.isLoading = true;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.isLoading = false; // Set isLoading to false on error
      state.error = action.error.message; // Store the error message
    });
  }
});

export default blogslice.reducer;