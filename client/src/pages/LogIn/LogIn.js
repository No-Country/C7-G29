import React, {useState} from 'react';
import './Login.css';
import LogoLogIn from "./../../assets/logo-login.png";

export default function LogIn() {

  const [login, setLogin] = useState(false)

  const loginFunctional = () => {
    setLogin(true)
  }

  return (
    <div>
      <div className="login-general-text">
        <h1 className="login-h1">Inicia Sessión con <br />Darkroom</h1>
      </div>
      {login === true ? 
      (
      <div className="login-background-functional">
        <div>
          <img className="login-img" src={LogoLogIn} />
        </div>
        <div className="div-user">
          <label className='label-user'>Usuario o email</label>
          <input className='login-user' type="text" placeholder="Ej: ramiro_diaz@darkroon.com" />
        </div>
        <div className="div-password">
        <label className='label-password'>Contraseña</label>
          <input className='login-password' type="password" />
        <label className='label-check-password'>Mas de 6 caracteres</label>
        </div>
        <div className="div-check">
          <input className='login-check' type="checkbox" />
        <label className='label-check'>Recordar Contraseña</label>
        </div>
        <button 
          className='login-login' 
          onClick={loginFunctional}>
          Iniciar sessión
        </button>
        <p className='login-o'>o</p>
        <button className='login-google'>Continuar con Google</button>
        <button className='login-fb'>Continuar con Facebook</button>
        <p className='login-help-password'>¿Te olvidaste la contraseña?</p>
        <p className='login-help'>¿Necesitas ayuda?</p>
      </div>
      )
      :
      (
      <div className="login-background-functional">
        <div>
          <img className="login-img" src={LogoLogIn} />
        </div>
        <button className='login-register'>Registrarme</button>
        <button 
          className='login-login' 
          onClick={loginFunctional}>
          Iniciar sessión
        </button>
        <p className='login-o'>o</p>
        <button className='login-google'>Continuar con Google</button>
        <button className='login-fb'>Continuar con Facebook</button>
        <p className='login-help'>¿Necesitas ayuda?</p>
      </div>
      )
      }
    </div>
  )
}
