import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Group from "./../../assets/Group.png";
import "./Navbar.css";
// import Notificaciones from './../../assets/Vector.png';
// import Subir from './../../assets/iTETAH.tif_1_.png';
// import Carrito from './../../assets/carrito.png';

export default function Navbar() {
  const currentUser = useSelector((state) => state.userLoged.currentUser);

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(!modalOpen);
  };

  window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 500) {
      document.querySelector(".navbar_component")?.classList.add("active")
    } else {
      document.querySelector(".navbar_component")?.classList.remove("active")
    }
  })

  return (
    <div className="navbar_component">
      <div className="navbar-general">
        <Link to="/" className="navbar-container-img">
          <img className="navbar-img" src={Group} alt="sadasd" />
        </Link>
        <div className="navbar-container-link">
          {/* <Link className="navbar-link">Categorias</Link> */}
          <Link className="navbar-link" to="/publish">
            Subir
          </Link>
          <Link className="navbar-link">Carrito</Link>
          {/* <Link className="navbar-link"><img src={Notificaciones}/></Link> */}
          {currentUser.length > 1 ? (
            <Link className="navbar-link" to="/users">
              Iniciar sesión
            </Link>
          ) : (
            <div onClick={handleOpen} className="navbar_divAvatar">
              <img src={currentUser.avatar} alt="" />
            </div>
          )}
        </div>
      </div>

      {modalOpen ? (
        <div className="navbar_menuModal">
          <Link to={`/profile/${currentUser._id}`} className="">
            ver perfil
          </Link>
          <span className="">favoritos</span>
          <span className="">cerrar sesion</span>
        </div>
      ) : null}
    </div>
  );
}
