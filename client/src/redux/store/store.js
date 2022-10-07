import { configureStore } from "@reduxjs/toolkit";
import photos from "../slices/photosSlice";
import cart from "../slices/cartSlice";
import user from "../slices/cartSlice";
import userLoged from "../slices/usersLogedSlice";
import profile from "../slices/profileSlice";
import authSlice from "../slices/authSlice";


export default configureStore({
  reducer: {
    photos,
    cart,
    user,
    authSlice,
    userLoged,
    profile,
  },
});
