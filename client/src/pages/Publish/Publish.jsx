import { useState } from "react";
import { uploadPhotoToCloudinary } from "../../redux/actions/photosActions";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import FormularioFoto from "../../components/FormularioFoto/FormularioFoto";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DevicesIcon from "@mui/icons-material/Devices";

import Upload from "../../assets/upload.svg";
import Logo from "../../assets/logo-login.png";
import banner from '../../assets/banner-upload-img.png'

import "./Publish.css";

export default function Publish() {
	const [inputImage, setInputImage] = useState(null);

	async function handleImage(e) {
		// console.log(e.target.files)
		const response = uploadPhotoToCloudinary(e);
		const d = await response();
		setInputImage(d);
	}

	return (
		<>
			<div className="login-total">
				<Navbar />
			</div>

			<h2 className="title-page">Carga tu foto</h2>

			<button className="go-back-icon" onClick={() => setInputImage(null)}>
				<ArrowBackIcon />
			</button>

			<div className="upload-box">
				{
					!inputImage && <img src={banner} alt="banner-img" className="logo-app" />				
				}
			</div>

			{!inputImage && (
				<div className="upload-container">
					
					<div className="text-legacy-box">
						<input type="checkbox" id="terms" name="" value=""/>
						<label for="terms" className="text-legacy">Acepto los <span className="text-legacy-link">terminos y condiciones</span></label>
					</div>
					
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
				inputImage.map((x) => <FormularioFoto x={x} key={x} />)}
			{!!inputImage && (
				<button className="btn-back" onClick={() => setInputImage(null)}>
					<ArrowBackIcon /> Volver a cargar imágenes
				</button>
			)}

			<Footer />
		</>
	);
}
