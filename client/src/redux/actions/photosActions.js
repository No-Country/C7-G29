import {
  insertDataAllPhotos,
  setFilter,
  insertDetails,
} from "../slices/photosSlice";
import { fillProfileData } from "../slices/profileSlice";

export const getAllPhotosData = () => async (dispatch) => {
  return await fetch(`http://localhost:9000/api/publication`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((d) => dispatch(insertDataAllPhotos(d)))
    .catch((e) => e);
};

export const getDataForFiltering = (filterData) => async (dispatch) => {
  return dispatch(setFilter(filterData));
};

export const uploadPhotoForm = (data) => async () => {
  return fetch(`http://localhost:9000/api/publication`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: data.title.value,
      description: data.description.value,
      url: data.image.value,
      price: data.price.price,
      pay: data.price.pay,
      photographer: "6337263cc2cbac1f2c2a09f5",
    }),
  })
    .then((response) => response.json())
    .then((d) => d)
    .catch((e) => e);
};

export const uploadPhotoToCloudinary = (e) => async () => {
  const imageData = new FormData();
  imageData.append("file", e.target.files[0]);
  imageData.append("upload_preset", "skaneetk");

  return await fetch("https://api.cloudinary.com/v1_1/dhyz4afz7/image/upload", {
    method: "POST",
    body: imageData,
  })
    .then((response) => response.json())
    .then((data) => data.secure_url);
};

export const deletePhoto = (id) => async (dispatch) => {
  return await fetch(`http://localhost:9000/api/publication/${id}`, {
    method: "DELETE",
  })
    .then(async (d) => {
      return await fetch(`http://localhost:9000/api/publication`, {
        method: "GET",
      })
        .then((responsea) => responsea.json())
        .then((f) => dispatch(insertDataAllPhotos(f)))
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
};

export const loginAction = (data) => async () => {
  console.log({ data });
  return fetch(`http://localhost:9000/api/auth/singUp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  })
    .then((response) => response.json())
    .then((d) => d)
    .catch((e) => e);
};

export const getDetails = (id) => async (dispatch) => {
  return fetch(`http://localhost:9000/api/searchId/publicationForId/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((d) => dispatch(insertDetails(d)))
    .catch((e) => e);
};

export const getProfileDetails = (id) => async (dispatch) => {
  return fetch(`http://localhost:9000/api/searchId/userForId/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((d) => dispatch(fillProfileData(d)))
    .catch((e) => e);
};
