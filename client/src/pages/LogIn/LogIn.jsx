import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginAction, userCurrentAction} from '../../redux/actions/photosActions';
import './Login.css';
import LogoLogIn from "./../../assets/logo-login.png";
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
// import { jwt } from 'jsonwebtoken';

export default function LogIn() {

  const cookiejtw = document.cookie.replace('jwt=', '')

  const dispatch = useDispatch()

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const value = e.target.value
    setLoginForm({
      ...loginForm ,
      [e.target.name]: value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {

      await dispatch(loginAction(loginForm))

      dispatch(userCurrentAction())

      
      setLoginForm({
        email: "",
        password: ""
      })
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <div className="login-total">
      <Navbar />
    <div className='login-background'>
      <div className="login-general-text">
        <h1 className="login-h1">Inicia Sessión con <br />Darkroom</h1>
      </div>

      <form className="login-background-functional" onSubmit={handleSubmit}>
        <div>
          <img className="login-img" src={LogoLogIn} />
        </div>
        <div className="div-user">
          <label className='label-user'>Usuario o email</label>
          <input 
            className='login-user' 
            type="text" 
            placeholder="Ej: ramiro_diaz@darkroon.com" 
            onChange={handleChange}
            name="email"
            value={loginForm.email}
          />
        </div>
        <div className="div-password">
        <label className='label-password'>Contraseña</label>
          <input 
            className='login-password' 
            type="password" 
            onChange={handleChange}
            name="password"
            value={loginForm.password}
          />
        <label className='label-check-password'>Mas de 6 caracteres</label>
        </div>
        <div className="div-check">
          <input className='login-check' type="checkbox" />
        <label className='label-check'>Recordar Contraseña</label>
        </div>
        <button className='login-login'>Iniciar sessión</button>
        <p className='login-o'>o</p>
        <button className='login-google'>Continuar con Google</button>
        <button className='login-fb'>Continuar con Facebook</button>
        <p className='login-help-password'>¿Te olvidaste la contraseña?</p>
        <p className='login-help'>¿Necesitas ayuda?</p>
      </form>

      {/* <div className="login-background-functional">
        <button className='login-register-after'>Registrarme</button>
        <button 
          className='login-login' 
          onClick={loginFunctional}>
          Iniciar sessión
        </button>
        <p className='login-o'>o</p>
        <button className='login-google'>Continuar con Google</button>
        <button className='login-fb'>Continuar con Facebook</button>
        <p className='login-help'>¿Necesitas ayuda?</p>
      </div> */}

    </div>
    <Footer />
    </div>
  )
}
