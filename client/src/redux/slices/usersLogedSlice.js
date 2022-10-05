import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: []
};

const userLoged = createSlice({
  name: "userLoged",
  initialState,
  reducers: {
    getUserLoged: (state, {payload}) => {
      console.log("usersLogedSlice: ", payload)
      state.currentUser = payload;
    },
  }
});

export const { getUserLoged } = userLoged.actions;
export default userLoged.reducer;
