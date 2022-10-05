import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Group from './../../assets/Group.png';
import './Navbar.css';
// import Notificaciones from './../../assets/Vector.png';
// import Subir from './../../assets/iTETAH.tif_1_.png';
// import Carrito from './../../assets/carrito.png';


export default function Navbar() {

    const currentUser = useSelector((state) => state.userLoged.currentUser)

    console.log({currentUser})

    return (
        <div>
            <div className="navbar-general">
                <Link to="/" className="navbar-container-img">
                    <img className="navbar-img" src={Group} />
                </Link>
                <div className="navbar-container-link">
                    {/* <Link className="navbar-link">Categorias</Link> */}
                    <Link className="navbar-link" to="/publish">Subir</Link>
                    <Link className="navbar-link">Carrito</Link>
                    {/* <Link className="navbar-link"><img src={Notificaciones}/></Link> */}
                    {currentUser 
                        ? 
                        <Link className="navbar-link" to="/users">Iniciar sesión</Link>
                        : 
                        <div className='navbar_divAvatar'><img src={currentUser.avatar} alt="" /></div>
                    }
                </div>
            </div>
        </div>
  )
}
