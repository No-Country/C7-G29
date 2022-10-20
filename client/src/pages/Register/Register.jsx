import React, { useState, useRef, useEffect } from "react";
import "./Register.css";
import LogoLogIn from "./../../assets/logo-login.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OjoAbierto from "./../../assets/ojo-abierto.png";
import OjoCerrado from "./../../assets/visible.png";
import { GoogleLogin } from "react-google-login";
import { Link, useParams } from "react-router-dom";
import { registerUser, loginAction, userCurrentAction, registerUserGoogle } from "../../redux/actions/photosActions";
import { useDispatch } from "react-redux";
import { gapi } from "gapi-script";

export default function Register() {
  const dispatch = useDispatch();
  const params = useParams();
  const [name, setName] = useState({ value: "", error: null });
  const [lastName, setLastName] = useState({ value: "", error: null });
  const [email, setEmail] = useState({ value: "", error: null });
  const [password, setPassword] = useState({ value: "", error: null });
  const [checkPassword, setCheckPassword] = useState("");
  const [coinsidence, setCoinsidence] = useState(null);
  const [passwordYesRegister, setPasswordYesRegister] = useState(false);
  const [passwordYesRegister2, setPasswordYesRegister2] = useState(false);

  const elementPasswordRegister = useRef(null);
  const elementPasswordRegister2 = useRef(null);

  const yesRegister = (e) => {
    setPasswordYesRegister(!passwordYesRegister);
    if (passwordYesRegister === true) {
      elementPasswordRegister.current.type = "password";
    } else {
      elementPasswordRegister.current.type = "text";
    }
  };

  const yesRegister2 = (e) => {
    setPasswordYesRegister2(!passwordYesRegister2);
    if (passwordYesRegister2 === true) {
      elementPasswordRegister2.current.type = "password";
    } else {
      elementPasswordRegister2.current.type = "text";
    }
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_ID,
        scope: "email",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (email.error || password.error || coinsidence) {
    } else {
      const a = await registerUser({
        name: name.value,
        lastName: lastName.value           ,
        email: email.value,
        password: password.value,
        userType: params.userType,
      });
      if (a.creado) {
        await dispatch(loginAction({ email: email.value, password: password.value }));
        await dispatch(userCurrentAction());
      }
    }
  }

  function handleName(e) {
    //eslint-disable-next-line
    /* if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))  */setName({ value: e.target.value, error: false });
    /* else setEmail({ value: "", error: true }); */
  }

  function handleLastName(e) {
    //eslint-disable-next-line
    /* if (/^\w+([\.-]?              )*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))  */setLastName({ value: e.target.value, error: false });
    /* else setEmail({ value: "", error: true }); */
  }

  function handleEmail(e) {
    //eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) setEmail({ value: e.target.value, error: false });
    else setEmail({ value: "", error: true });
  }

  function handlePassword(e) {
    //eslint-disable-next-line
    if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(e.target.value)) setPassword({ value: e.target.value, error: false });
    else setPassword({ value: "", error: true });

    if (checkPassword !== e.target.value) setCoinsidence(true);
    else setCoinsidence(false);
  }

  function handlePasswordCheck(e) {
    setCheckPassword(e.target.value);
    //eslint-disable-next-line
    if (password.value !== e.target.value) setCoinsidence(true);
    else setCoinsidence(false);
  }

  function handleGoogleRegister(e) {
    dispatch(registerUserGoogle({
      avatar: e.profileObj.imageUrl,
      name: e.profileObj.givenName,
      lastName: e.profileObj.familyName,
      email : e.profileObj.email,
      userType: params.userType,
    }))
  }

  return (
    <div className="register-total">
      <div className="register_div">
        <Navbar />
      </div>
      <div className="register-background">
        <div className="register-general-text">
          <h1 className="register-h1">
            Registrate
          </h1>
        </div>
        <form className="register-background-functional">
          <div>
            <img className="login-img" src={LogoLogIn} alt="logo" />
          </div>
          <div className="div-name-register">
            <label className={email.error === true ? "label-name-register_red" : name.error === false ? "label-name-register_green" : "label-name-register"}>
              "Ingresar nombre"
            </label >
              <input className={email.error === false ? "login-user-register_green" : name.error === true ? "login-user-register_red" : "login-user-register"} type="text" onChange={handleName} />
          </div>
          <div className="div-lastName-register">
            <label className={email.error === true ? "label-lastName-register_red" : lastName.error === false ? "label-lastName-register_green" : "label-lastName-register"}>
              "Ingresar apellido"
            </label>
              <input className={email.error === false ? "login-user-register_green" : lastName.error === true ? "login-user-register_red" : "login-user-register"} type="text" onChange={handleLastName} />
          </div>
          <div className="div-password-register">
            <label className={email.error === true ? "label-password-register_red" : email.error === false ? "label-password-register_green" : "label-password-register"}>
              {email.error === false ? "Email Valido" : email.error === true ? "Email No Valido" : "Ingresar Email"}
            </label>
            <input className={email.error === false ? "login-user-register_green" : email.error === true ? "login-user-register_red" : "login-user-register"} type="email" placeholder="Ej: ramiro_diaz@darkroon.com" onChange={(e) => handleEmail(e)} />
          </div>
          <div className="div-password-register">
            <label className={password.error === true ? "label-password-register_red" : password.error === false ? "label-password-register_green" : "label-password-register"}>
              {password.error === true ? "No Cumple los requisitos minimos" : password.error === false ? "Contraseña Valida" : "Ingresar Contraseña"}
            </label>
            <input
              className={password.error === true ? "login-password-register_red" : password.error === false ? "login-password-register_green" : "login-password-register"}
              type="password"
              ref={elementPasswordRegister}
              onChange={(e) => handlePassword(e)}
            />
            {passwordYesRegister === true ? <img alt="mostrar password" onClick={yesRegister} src={OjoAbierto} className="eyes-password"></img> : <img alt="mostar password" onClick={yesRegister} src={OjoCerrado} className="eyes-password"></img>}
          </div>
          <div className="div-password-register">
            <label className={coinsidence === true ? "label-password-register_red" : coinsidence === false ? "label-password-register_green" : "label-password-register"}>
              {coinsidence === false ? "Contraseñas Coinciden" : coinsidence === true ? "Las contraseñas no coinciden" : "Repetir Contraseña"}
            </label>
            <input
              className={coinsidence === true ? "login-password-register_red" : coinsidence === false ? "login-password-register_green" : "login-password-register"}
              type="password"
              ref={elementPasswordRegister2}
              onChange={(e) => handlePasswordCheck(e)}
            />
            {passwordYesRegister2 === true ? <img alt="logo" onClick={yesRegister2} src={OjoAbierto} className="eyes-password"></img> : <img alt="mostrar password" onClick={yesRegister2} src={OjoCerrado} className="eyes-password"></img>}
            <label className="label-check-password-register">Minimo 8 caracteres 1 Mayuscula 1 Minuscula y 1 Numero</label>
          </div>

          <button className="register-register" style={{ borderRadius: "20px" }} onClick={(e) => handleSubmit(e)}>
            Registrarse
          </button>
          <p className="register-o">o</p>
          <div className="div_registerTer">
            <GoogleLogin className="login_google" clientId={process.env.REACT_APP_GOOGLE_ID} buttonText="Countinua con Google" onSuccess={handleGoogleRegister} onFailure={handleGoogleRegister} cookiePolicy={"single_host_origin"} />
          </div>
          <Link
            className="register-fb"
            to="/login"
            style={{
              borderRadius: "20px",
              textDecoration: "none",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Continuar con Facebook
          </Link>
          <p className="register-help-password">¿Te olvidaste la contraseña?</p>
          <p className="register-help">¿Necesitas ayuda?</p>
        </form>
      </div>

      <Footer />
    </div>
  );
}
