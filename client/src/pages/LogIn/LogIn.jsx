import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/photosActions";
import "./Login.css";
import LogoLogIn from "./../../assets/logo-login.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OjoAbierto from "./../../assets/ojo-abierto.png";
import OjoCerrado from "./../../assets/visible.png";
import { login } from "../../redux/slices/authSlice";

export default function LogIn() {
  const [passwordYes, setPasswordYes] = useState(false);

  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setLoginForm({
      ...loginForm,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const a = await dispatch(loginAction(loginForm));
      if (a.loged) {
        dispatch(login());
        console.log("logeado");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }

    setLoginForm({
      email: "",
      password: "",
    });
  };

  const elementPassword = useRef(null);

  const yesPassword = (e) => {
    setPasswordYes(!passwordYes);
    if (passwordYes === true) {
      elementPassword.current.type = "password";
    } else {
      elementPassword.current.type = "text";
    }
  };

  return (
    <div className="login-total">
      <div className="login_divNav">
        <Navbar />
      </div>
      <div className="login-background">
        <div className="login-general-text">
          <h1 className="login-h1">
            Inicia Sessión con <br />
            Darkroom
          </h1>
        </div>

        <form className="login-background-functional" onSubmit={handleSubmit}>
          <div>
            <img className="login-img" src={LogoLogIn} alt="asdas" />
          </div>
          <div className="div-user">
            <label className="label-user">Usuario o email</label>
            <input
              className="login-user"
              type="text"
              placeholder="Ej: ramiro_diaz@darkroon.com"
              onChange={handleChange}
              name="email"
              value={loginForm.email}
            />
          </div>
          <div className="div-password">
            <label className="label-password">Contraseña</label>
            <input
              ref={elementPassword}
              className="login-password"
              type="password"
              onChange={handleChange}
              name="password"
              value={loginForm.password}
            />
            {passwordYes === true ? (
              <img
                onClick={yesPassword}
                src={OjoAbierto}
                className="eyes-password"
                alt="asdas"
              ></img>
            ) : (
              <img
                onClick={yesPassword}
                src={OjoCerrado}
                className="eyes-password"
                alt="asdas"
              ></img>
            )}
            <label className="label-check-password">Mas de 6 caracteres</label>
          </div>
          <div className="div-check">
            <input className="login-check" type="checkbox" />
            <label className="label-check">Recordar Contraseña</label>
          </div>
          <button className="login-login">Iniciar sessión</button>
          <p className="login-o">o</p>
          <button className="login-google">Continuar con Google</button>
          <button className="login-fb">Continuar con Facebook</button>
          <p className="login-help-password">¿Te olvidaste la contraseña?</p>
          <p className="login-help">¿Necesitas ayuda?</p>
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
  );
}
