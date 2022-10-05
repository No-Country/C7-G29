import React from "react";
import { Link } from "react-router-dom";
import Group from "./../../assets/Group.png";
import "./Navbar.css";
import Notificaciones from "./../../assets/Vector.png";
import Subir from "./../../assets/iTETAH.tif_1_.png";
import Carrito from "./../../assets/carrito.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar-general">
        <div className="navbar-container-img">
          <img className="navbar-img" src={Group} />
        </div>
        <div className="navbar-container-link">
          <Link className="navbar-link">Categorias</Link>
          <Link className="navbar-link" to="/publish">
            <img className="navbar-icon" src={Subir} />
            &nbsp; Subir
          </Link>
          <Link className="navbar-link" to="/cart">
            <img className="navbar-icon" src={Carrito} />
            &nbsp; Carrito
          </Link>
          <Link className="navbar-link">
            <img src={Notificaciones} />
          </Link>
          <Link className="navbar-link" to="/users">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
