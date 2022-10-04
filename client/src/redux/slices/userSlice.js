import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fillUserData: (state, { payload }) => {
      //Creo que no va a ser necesario esto
    },
    cleanData: (state) => {
      state = initialState;
    },
  },
});

export const { fillUserData, cleanData } = userSlice.actions;
export default userSlice.reducer;
