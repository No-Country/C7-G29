import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPhotosData: [],
  filterPhotosData: [],
};

//Este es el slice que uso para tener los datos de todas las fotos que se cargan en el home.

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    insertDataAllPhotos: (state, { payload }) => {
      state.allPhotosData = payload;
      state.filterPhotosData = payload;
    },
    setFilter: (state, { payload }) => {
      var newArray = state.allPhotosData;
    },
    cleanPhotos: (state, { payload }) => {
      state = initialState;
    },
  },
});

export const { insertDataAllPhotos, cleanPhotos, setFilter } =
  photosSlice.actions;
export default photosSlice.reducer;
