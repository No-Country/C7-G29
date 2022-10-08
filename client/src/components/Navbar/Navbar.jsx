import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/photosActions";
import { Link } from "react-router-dom";
import Group from "./../../assets/Group.png";
import "./Navbar.css";
import { logout, login } from "../../redux/slices/authSlice";
// import Notificaciones from './../../assets/Vector.png';
// import Subir from './../../assets/iTETAH.tif_1_.png';
// import Carrito from './../../assets/carrito.png';

export default function Navbar() {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.authSlice.isLogged);

  const currentUser = useSelector((state) => state.userLoged.currentUser);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    dispatch(logout());
  };

  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 500) {
      document.querySelector(".navbar_component")?.classList.add("active");
    } else {
      document.querySelector(".navbar_component")?.classList.remove("active");
    }
  });

  return (
    <div className="navbar_component">
      <div className="navbar-general">
        <Link to="/" className="navbar-container-img">
          <img className="navbar-img" src={Group} alt="sadasd" />
        </Link>

        <div className="navbar-container-link">
          <Link className="navbar-link">Categorias</Link>
          <Link className="navbar-link" to="/publish">
            Subir
          </Link>

          <Link to="/cart" className="navbar-link">
            Carrito
          </Link>

          {/*currentUser.length > 0 ? (
            <div onClick={handleOpen} className="navbar_divAvatar">
              <img src={currentUser.avatar} alt="" />
            </div>
          ) : (
            <Link className="navbar-link" to="/users">
              Iniciar sesión
            </Link>
          )*/}
          {isLogged ? (
            <div onClick={handleOpen} className="navbar_divAvatar">
              <img src={currentUser.avatar} alt="" />
            </div>
          ) : (
            <Link className="navbar-link" to="/users">
              Iniciar sesión
            </Link>
          )}
        </div>

        {modalOpen ? (
          <div className="navbar_menuModal">
            <Link to={`/profile/${currentUser._id}`} className="">
              ver perfil
            </Link>
            <span className="navbar_logOut" onClick={handleLogout}>
              cerrar sesion
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
