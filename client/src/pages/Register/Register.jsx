import React, {useState, useRef} from 'react';
import "./Register.css";
import LogoLogIn from "./../../assets/logo-login.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OjoAbierto from './../../assets/ojo-abierto.png';
import OjoCerrado from './../../assets/visible.png';

export default function Register() {

  const [passwordYesRegister, setPasswordYesRegister] = useState(false)
  const [passwordYesRegister2, setPasswordYesRegister2] = useState(false)

  const elementPasswordRegister = useRef(null)
  const elementPasswordRegister2 = useRef(null)

  const yesRegister = e => {
    setPasswordYesRegister(!passwordYesRegister)
    if(passwordYesRegister === true) {
      elementPasswordRegister.current.type = "password"
    } else {
      elementPasswordRegister.current.type = "text"
    }
  }

  const yesRegister2 = e => {
    setPasswordYesRegister2(!passwordYesRegister2)
    if(passwordYesRegister2 === true) {
      elementPasswordRegister2.current.type = "password"
    } else {
      elementPasswordRegister2.current.type = "text"
    }
  }

  return (
    <div className="register-total">
      <Navbar />
      <div className="register-background">
        <div className="register-general-text">
          <h1 className="register-h1">
            Registrate con <br />
            Darkroom
          </h1>
        </div>
        <form className="register-background-functional">
          <div>
            <img className="login-img" src={LogoLogIn} />
          </div>
          <div className="div-user-register">
            <label className="label-user-register">Usuario o email</label>
            <input
              className="login-user-register"
              type="text"
              placeholder="Ej: ramiro_diaz@darkroon.com"
            />
          </div>
          <div className="div-password-register">
            <label className="label-password-register">Contraseña</label>
            <input className="login-password-register" type="password" ref={elementPasswordRegister} />
            {passwordYesRegister === true ? 
          (          <img onClick={yesRegister} src={OjoAbierto} className="eyes-password"></img>)
          :
          (          <img onClick={yesRegister} src={OjoCerrado} className="eyes-password"></img>)  
          }
          </div>
          <div className="div-password-register">
            <label className="label-password-register">
              Repetir contraseña
            </label>
            <input className="login-password-register" type="password" ref={elementPasswordRegister2} />
            {passwordYesRegister2 === true ? 
          (          <img onClick={yesRegister2} src={OjoAbierto} className="eyes-password"></img>)
          :
          (          <img onClick={yesRegister2} src={OjoCerrado} className="eyes-password"></img>)  
          }
            <label className="label-check-password-register">
              Mas de 6 caracteres
            </label>
          </div>
          <div className="div-check-register">
            <input className="login-check-register" type="checkbox" />
            <label className="label-check-register">Recordar Contraseña</label>
          </div>
          <button className="register-register">Iniciar sessión</button>
          <p className="register-o">o</p>
          <button className="register-google">Continuar con Google</button>
          <button className="register-fb">Continuar con Facebook</button>
          <p className="register-help-password">¿Te olvidaste la contraseña?</p>
          <p className="register-help">¿Necesitas ayuda?</p>
        </form>
      </div>

      <Footer />
    </div>
  );
}
