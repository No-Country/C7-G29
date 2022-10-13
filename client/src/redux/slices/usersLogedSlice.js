import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    followed: [],
    favorites: [],
    followers: [],
    liked: [],
  },
  loged: false,
};

const userLoged = createSlice({
  name: "userLoged",
  initialState,
  reducers: {
    getUserLoged: (state, { payload }) => {
      state.currentUser =
        payload.message === "no token provided"
          ? initialState.currentUser
          : payload;

      state.loged = payload.message === "no token provided" ? false : true;
    },
    logOut: (state, { payload }) => {
      state.loged = false;
      state.currentUser = initialState.currentUser;
    },
  },
});

export const { getUserLoged, logOut } = userLoged.actions;
export default userLoged.reducer;
