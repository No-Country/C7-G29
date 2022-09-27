import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fillUserData: (state, { payload }) => {
      //Creo que no va a ser necesario esto
      console.log(payload);
    },
    cleanData: (state) => {
      state = initialState;
    },
  },
});

export const { fillUserData, cleanData } = cartSlice.actions;
export default cartSlice.reducer;
