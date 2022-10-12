import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPhotosData: [],
  filterPhotosData: [],
  photoDetails: {},
};

//Este es el slice que uso para tener los datos de todas las fotos que se cargan en el home.

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    insertDataAllPhotos: (state, { payload }) => {
      payload.reverse();
      state.allPhotosData = payload;
      state.filterPhotosData = payload;
    },
    setFilter: (state, { payload }) => {
      var newArray = state.allPhotosData;
      if (payload.priceRange.pay !== null)
        newArray = newArray.filter((x) => x.pay === payload.priceRange.pay);

      if (payload.priceRange.min !== null)
        newArray = newArray.filter(
          (x) => x.price > payload.priceRange.min && x.pay
        );

      if (payload.priceRange.max !== null)
        newArray = newArray.filter(
          (x) => x.price < payload.priceRange.max || !x.pay
        );

      if (payload.title)
        newArray = newArray.filter(
          (x) =>
            x.title.toLowerCase().includes(payload.title.toLowerCase()) ||
            x.tags.toLowerCase().includes(payload.title.toLowerCase())
        );

      state.filterPhotosData = newArray;
    },
    cleanPhotos: () => initialState,
    insertDetails: (state, { payload }) => {
      state.photoDetails = payload;
    },
  },
});

export const { insertDataAllPhotos, cleanPhotos, setFilter, insertDetails } =
  photosSlice.actions;
export default photosSlice.reducer;
