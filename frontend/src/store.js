import { configureStore } from '@reduxjs/toolkit';
import BlogReducer from "./BlogSlices/index";
import BlogDetailReducer from "./BlogSlices/BlogDetail";
import RegisterUser from "./UserSlices/Signup"
import adduserReducer from "./UserSlices/index"
export const store = configureStore({
  reducer: {
  Blog:BlogReducer,
  BlogDetail: BlogDetailReducer,
  UserSignup:RegisterUser,
  User:adduserReducer,
  },
});