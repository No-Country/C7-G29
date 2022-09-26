import { deletePhoto } from "../../redux/actions/photosActions";
import { useDispatch } from "react-redux";

import React, {useState} from 'react'
import './HomeCards.css';

import { addItemToCart } from "../../redux/slices/cartSlice";


export default function Home({ x }) {
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


  const [visible, setVisible] = useState(false)

  const visibleEvent = () => {
    setVisible(true)
    console.log("soy un objeto visible")
  }

  return (
    <div className="cards">
      <div className="cards-container">
        <img
          id={x._id}
          src={x.url}
          className="card-image"
          alt="one of the photos"
          onMouseOver={visibleEvent}
          onMouseOut={()=>setVisible(false)}
        />

        {visible === !false ? 
        (
          <div>
          <button className="card-delete" onClick={() => dispatch(deletePhoto(x._id))}>🗑️</button>
          <button className="card-favorite">🧡</button>
          <h3 className="card-title">{x.title}</h3> 
          {x.pay ? 
            <p className="card-price">
            {x.price} $
            </p> 
          : 
          null
          }
          { x.pay 
          ? 
          null 
          : 
        (
          <button 
            className="card-download"
            onClick={() => download()}>💾</button>
        )}
        </div>
        )
      :
      null
        }
      </div>

      {x.pay ? (
        <button onClick={() => dispatch(addItemToCart(x))}>Add to Cart</button>
      ) : (
        <button onClick={() => download()}>Click to download</button>
      )}

    </div>
  );
}
