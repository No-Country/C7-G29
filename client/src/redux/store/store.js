import { configureStore } from "@reduxjs/toolkit";
import photos from "../slices/photosSlice";
import cart from "../slices/cartSlice";
import user from "../slices/cartSlice";
import profile from "../slices/profileSlice";

export default configureStore({
  reducer: {
    photos,
    cart,
    user,
    profile,
  },
});
