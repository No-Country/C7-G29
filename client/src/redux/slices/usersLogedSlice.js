import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: [],
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
    },
  },
});

export const { getUserLoged } = userLoged.actions;
export default userLoged.reducer;
