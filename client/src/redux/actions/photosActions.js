import {insertDataAllPhotos} from "../slices/photosSlice"

export const getAllPhotosData = () => async (dispatch) => {
    
    /*
    Falta que exista esta ruta en el back
    return fetch(`http://localhost:3001/photos`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((d) => dispatch(insertDataAllPhotos(d)))
      .catch((e) => e);
   */
        const dataTest=[
            {id: "sa65d41", title:"Una Foto", price: 0, pay:false, url:"https://d500.epimg.net/cincodias/imagenes/2018/05/25/lifestyle/1527248000_202393_1527248117_rrss_normal.jpg"},
            {id: "a5s6d4", title:"Sulmita", price: 45, pay:true, url:"https://pbs.twimg.com/profile_images/1156868703/zulma_lobato_revista_maxim_400x400.jpg"},
            {id: "das46d2", title:"Mike Tyson", price:21, pay:false, url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mike-tyson-poses-for-a-portrait-news-photo-1654945111.jpg"}
        ]
      return dispatch(insertDataAllPhotos(dataTest))
  };