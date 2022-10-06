import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Upload from "../../assets/upload.svg";
import Logo from "../../assets/logo-login.png";
import "./Publish.css";
import { uploadPhotoToCloudinary } from "../../redux/actions/photosActions";
import Navbar from "../../components/Navbar/Navbar";
import FormularioFoto from "../../components/FormularioFoto/FormularioFoto";

export default function Publish() {
  const [inputImage, setInputImage] = useState(null);

  async function handleImage(e) {
    //por ahora luego cambiar la linea 23

    const response = uploadPhotoToCloudinary(e);
    const d = await response();
    setInputImage(d);
  }

  return (
    <>
      <div className="login-total">
        <Navbar />
      </div>

      {!inputImage && (
        <>
          <h2 className="title-page">Subir Archivos</h2>
          <img src={Logo} alt="logo-app" className="logo-app" />
        </>
      )}

      {!inputImage && (
        <div className="upload-container">
          <img alt="Subir imagen" src={Upload} className="image-upload" />
          <div className="input-upload" id="formulario_uploadPhoto">
            <input
              name="formulario_uploadPhoto"
              multiple="multiple"
              type="file"
              accept="image/png,image/jpeg"
              onChange={(e) => handleImage(e)}
            ></input>
          </div>
        </div>
      )}

      {inputImage &&
        inputImage.map((x, index) => <FormularioFoto x={x} key={index} />)}

      <Footer />
    </>
  );
}
