import { configureStore } from '@reduxjs/toolkit';
import BlogReducer from "./BlogSlices/index";
import BlogDetailReducer from "./BlogSlices/BlogDetail";
export const store = configureStore({
  reducer: {
  UserSignup:"",
  User:"",
  Blog:BlogReducer,
  BlogDetail: BlogDetailReducer
  },
});