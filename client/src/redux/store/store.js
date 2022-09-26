import { configureStore } from "@reduxjs/toolkit";
import photos from "../slices/photosSlice";
import cart from "../slices/cartSlice";

export default configureStore({
  reducer: {
    photos,
    cart,
  },
});
