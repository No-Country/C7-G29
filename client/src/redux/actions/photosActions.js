import {
  insertDataAllPhotos,
  setFilter,
  insertDetails,
} from "../slices/photosSlice";
import { fillProfileData } from "../slices/profileSlice";
import { getUserLoged } from "../slices/usersLogedSlice";

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
  var response = [];

  for (let a = 0; a < e.target.files.length; a++) {
    const imageData = new FormData();
    imageData.append("file", e.target.files[a]);
    imageData.append("upload_preset", "skaneetk");

    await fetch("https://api.cloudinary.com/v1_1/dhyz4afz7/image/upload", {
      method: "POST",
      body: imageData,
    })
      .then((response) => response.json())
      .then((data) => response.push(data.secure_url));
  }

  return response;
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
  return fetch(`http://localhost:9000/api/auth/singIn`, {
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

export const logoutAction = () => async () => {
  return fetch(`http://localhost:9000/api/auth/logOut`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
};

export const userCurrentAction = () => async (dispatch) => {
  return await fetch(`http://localhost:9000/api/auth/loged`, {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((d) => dispatch(getUserLoged(d)))
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

export const buyItems = async (data) => {
  return fetch(`http://localhost:9000/api/mercadopago/buy`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((d) => d)
    .catch((e) => e);
};

export const addFollowed = (idPh, _idCurrent) => async () => {  
  return fetch(`http://localhost:9000/api/users/${_idCurrent}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      followed: idPh      
    }),
  })
    .then((response) => response.json())    
    .then((d) => d)
    .catch((e) => e);
};

export const addLiked = (id, _idCurrent) => async () => {  
  return fetch(`http://localhost:9000/api/users/${_idCurrent}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      liked: id      
    }),
  })
    .then((response) => response.json())    
    .then((d) => d)
    .catch((e) => e);
};

export const addFavotites = (id, _idCurrent) => async () => {  
  return fetch(`http://localhost:9000/api/users/${_idCurrent}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      favorites: id      
    }),
  })
    .then((response) => response.json())    
    .then((d) => d)
    .catch((e) => e);
};
