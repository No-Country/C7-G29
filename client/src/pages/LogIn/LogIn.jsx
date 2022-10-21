import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction, userCurrentAction, registerUser } from "../../redux/actions/photosActions";
import "./Login.css";
import LogoLogIn from "./../../assets/logo-login.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OjoAbierto from "./../../assets/ojo-abierto.png";
import OjoCerrado from "./../../assets/visible.png";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [passwordYes, setPasswordYes] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_ID,
        scope: "email",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    error: { location: "", value: "" },
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

    const a = await loginAction(loginForm);

    if (a.loged === "true") {
      dispatch(userCurrentAction());
    } else {
      if (a.e === "emptyEmail" || a.e === "emptyPassword")
        setLoginForm({
          ...loginForm,
          error: {
            location: a.e === "emptyEmail" ? "email" : "password",
            value: "Por Favor Ingrese dato",
          },
        });
      else {
        setLoginForm({
          ...loginForm,
          error: { location: "both", value: "null" },
        });
      }
    }
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

  async function responseGoogle(a) {
    const feching = await loginAction({ email: a.profileObj.email, password: "authUser" });

    if (feching.loged === "true") {
      dispatch(userCurrentAction());
    } else {
      const t = await registerUser({
        email: a.profileObj.email,
        password: "authUser",
        avatar: a.profileObj.imageUrl,
        name: a.profileObj.givenName,
        lastName: a.profileObj.familyName,
        userType: "userPhotographer",
      });
      if (t.creado) {
        await loginAction({ email: a.profileObj.email, password: "authUser" });
        await dispatch(userCurrentAction());
      }
    }
  }

  async function responseFacebook(a) {
    // console.log("facebook");
    const feching = await loginAction({ email: a.email, password: "authUser" });

    if (feching.loged === "true") {
      dispatch(userCurrentAction());
    } else {
      const t = await registerUser({
        email: a.email,
        password: "authUser",
        avatar: a.picture.data.url,
        name: a.name,
        lastName: ".",
        userType: "userPhotographer",
      });
      if (t.creado) {
        await loginAction({ email: a.profileObj.email, password: "authUser" });
        await dispatch(userCurrentAction());
      }
    }
  }

  function componentClicked() {}

  return (
    <div className="login-total">
      <div className="login_divNav">
        <Navbar />
      </div>
      <div className="login-background">
        <div className="login-general-text">
          <h1 className="login-h1">Inicia Sessión</h1>
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
              style={{
                borderColor: loginForm.error.location === "email" || loginForm.error.location === "both" ? "red" : "black",
              }}
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
              style={{
                borderColor: loginForm.error.location === "password" || loginForm.error.location === "both" ? "red" : "white",
              }}
            />
            {passwordYes === true ? <img onClick={yesPassword} src={OjoAbierto} className="eyes-password" alt="asdas"></img> : <img onClick={yesPassword} src={OjoCerrado} className="eyes-password" alt="asdas"></img>}
          </div>
          <div className="div-check">
            {/* <input className="login-check" type="checkbox" />
             <label className="label-check">Recordar Contraseña</label>  Hacer esto de forma segura es imposible... Si tienen ganas metanlo en localstorage y a la mierda pero re inseguro*/}
          </div>
          <button className="login-login">Iniciar sessión</button>
          <p className="login-o">o</p>
          <div style={{ width: "300px", alignSelf: "center" }}>
            <GoogleLogin className="login_google" clientId={process.env.REACT_APP_GOOGLE_ID} buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={"single_host_origin"} />
          </div>
          <div style={{ width: "300px", alignSelf: "center", margin: "15px 0" }}>
            <FacebookLogin className="login_facebook" appId={process.env.REACT_APP_FACEBOOK_ID} autoLoad={false} fields="name,email,picture" onClick={componentClicked} callback={responseFacebook} />
          </div>
          <Link className="login-help" to="/users">
            Registrarse
          </Link>
          <p className="login-help-password">¿Te olvidaste la contraseña?</p>
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
