import { deletePhoto } from "../../redux/actions/photosActions";
import { useDispatch } from "react-redux";
import Link from "react-router-dom";
import React, { useState } from "react";
import "./HomeCards.css";

import { useNavigate } from "react-router-dom";
import corazon from "./../../assets/corazon.png";
//import comprar from './../../assets/comprar.png';
import descargar from "./../../assets/descargar.png";
import guardar from "./../../assets/guardar.png";
import gris from "./../../assets/gris.jpg";

import { addItemToCart } from "../../redux/slices/cartSlice";

export default function Home({ x }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const download = (e) => {
    fetch(x.url, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [visible, setVisible] = useState(false);

  const visibleEvent = () => {
    setVisible(true);
  };

  return (
    <div className="galery-class">
      <div
        className="galery-item"
        onMouseOver={visibleEvent}
        onMouseOut={() => setVisible(false)}
      >
        <img
          id={x._id}
          src={x.url}
          className="galery-image"
          alt="one of the photos"
          onClick={() => navigate("/details/" + x._id)}
        />

        {visible === !false ? (
          <div>
            {/* <button className="card-delete" onClick={() => dispatch(deletePhoto(x._id))}>🗑️</button>*/}
            <img
              className="card-guardar"
              /*onClick={() => download()}*/
              src={guardar}
            ></img>
            <img className="card-favorite" src={corazon}></img>
            <img
              src={gris}
              className="card-users-img"
              onClick={() => navigate("/profile/" + x.photographer._id)}
            />
            <h3 className="card-title">{x.title}</h3>
            {x.pay ? <p className="card-price">{x.price} $</p> : null}
            {x.pay ? null : (
              <img
                className="card-download"
                onClick={() => download()}
                src={descargar}
              ></img>
            )}
          </div>
        ) : null}
      </div>

      {x.pay ? (
        <button onClick={() => dispatch(addItemToCart(x))}>Add to Cart</button>
      ) : (
        <button onClick={() => download()}>Click to download</button>
      )}
    </div> //agrege div este
  );
}
