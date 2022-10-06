import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails, getProfileDetails } from "../../redux/actions/photosActions";
import { cleanPhotos } from "../../redux/slices/photosSlice";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { IconButton } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './Details.css'

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.photos.photoDetails);
  const photographer = useSelector((state) => state.profile.userData);
  
  console.log('details', details)
  console.log('photographer', photographer)

  useEffect(() => {
    dispatch(getDetails(id));
    dispatch(getProfileDetails(details.photographer))
    return () => dispatch(cleanPhotos());
  }, [dispatch, id, details.photographer]);

  const handleFollow =()=>{
    console.log('ahora seguime estaaaa')
  }

  const handleDonate =()=>{
    console.log('te dono USD 1.000.000')
  }

  const handleLike =()=>{
    console.log('como te gusta el chori')
  }

  const handleSave =()=>{
    console.log('guardate estaaaaa')
  }

  const handleShare =()=>{
    console.log('el q come y no convida tiene un sapo en la barriga')
  }

  const handleBuy =()=>{
    console.log('dame toda la $$$$ en fotos')
  }

  return(
    <div className="container-detail">
      <div className="detail-navbar">
        <div className="left-group">
          <img className="avatar-img" src={photographer.avatar} alt="avatar-profile"/>
          <span className="name-ph">{`${photographer.name} ${photographer.lastName}`}</span>
          <button 
            className="btn-detail-navbar"             
            onClick={handleFollow}             
          ><PersonAddAltOutlinedIcon fontSize="small"/>Seguir</button>
          <button className="btn-detail-navbar" onClick={handleDonate}>Donar</button>
        </div>
        <div className="right-group">
          <button 
            className="btn-detail-navbar" 
            onClick={handleLike}
          ><FavoriteBorderOutlinedIcon fontSize="small"/>Me gusta</button>
          <button 
            className="btn-detail-navbar" 
            onClick={handleSave}
          ><BookmarksOutlinedIcon fontSize="small"/>Guardar</button>
        </div>        
      </div>

      <img className="main-img" src={details.url} alt="main-img" width={'50%'}/>

      <div className="detail-description">
        <span className="use">Uso premium</span>
        <div className="title-group">
          <p className="img-title">{details.title}</p>          
          <p className="img-ubication"><LocationOnOutlinedIcon fontSize="small"/>Ubication: En el medio de la nada - Ningún lugar</p>
          <p className="tags">Etiquetas</p>
          <div className="tags-group">
            <p className="img-tag"><LocalOfferOutlinedIcon fontSize="small"/>Bosque</p>
            <p className="img-tag"><LocalOfferOutlinedIcon fontSize="small"/>Playa</p>
            <p className="img-tag"><LocalOfferOutlinedIcon fontSize="small"/>Montaña</p>
          </div>
        </div>   
        <button 
          className="btn-share" 
          onClick={handleShare}
        ><ReplyOutlinedIcon fontSize="small"/>Compartir</button>
        <button 
          className="btn-buy"
          onClick={handleBuy}
        ><ShoppingCartOutlinedIcon fontSize="small"/>Comprar</button>     
      </div>
    </div>

  ) 
  
}