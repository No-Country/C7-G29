import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Group from "../../assets/Group.png";
import Upload from "../../assets/upload.svg";
import Logo from "../../assets/logo-login.png";
import "./Publish.css";
import { uploadPhotoForm, uploadPhotoToCloudinary } from "../../redux/actions/photosActions";

export default function Publish() {
	const [formData, setFormData] = useState({
		title: { value: null },
		description: { value: null },
		image: { value: null, loading: false },
		price: { pay: false, price: null },
		error: null,
	});

	const [inputImage, setInputImage] = useState(null);

	async function handleImage(e) {
		//por ahora luego cambiar la linea 23
		setInputImage(e);
		setFormData({ ...formData, image: { loading: true, value: null } });
		const response = uploadPhotoToCloudinary(e);
		const d = await response();
		setFormData({ ...formData, image: { loading: false, value: d } });
	}
	console.log(inputImage);

	async function handleSubmit(e) {
		e.preventDefault();
		const a = uploadPhotoForm(formData);
		const d = await a();
		console.log(formData);

		if (d.message === "Publicacion creada correctamente") {
			setFormData({
				title: { value: null },
				description: { value: null },
				image: { value: null, loading: false },
				price: { pay: false, price: null },
			});
			setInputImage(null);
		} else {
			setFormData({
				...formData,
				error: d,
			});
		}
	}

	function handleTitle(e) {
		setFormData({ ...formData, title: { value: e.target.value } });
	}
	const handleDescription = (e) => {
		setFormData({ ...formData, description: { value: e.target.value } });
	};
	function handlePricePay(e) {
		if (e.target.value === "gratis") {
			setFormData({
				...formData,
				price: { ...formData.price, pay: false },
			});
		}
		if (e.target.value === "paga") {
			setFormData({
				...formData,
				price: { ...formData.price, pay: true },
			});
		}
	}
	function handlePriceValue(e) {
		setFormData({ ...formData, price: { ...formData.price, price: e.target.value } });
	}
	return (
		<>
			<div className="navbar-general  background-navbar">
				<div className="navbar-container-img">
					<Link to="/">
						<img className="navbar-img" src={Group} />
					</Link>
				</div>
				<div className="navbar-container-link">
					<Link className="navbar-link">Categorias</Link>
					<Link className="navbar-link">Términos</Link>
					<Link className="navbar-link" to="/users">
						Iniciar sesión
					</Link>
				</div>
			</div>
			{!inputImage && (
				<>
					<h2 className="title-page">Subir Archivos</h2>
					<img src={Logo} alt="logo-app" className="logo-app" />
				</>
			)}

			<form onSubmit={(e) => handleSubmit(e)}>
				{!inputImage && (
					<div className="upload-container">
						<img alt="Subir imagen" src={Upload} className="image-upload" />
						<div className="input-upload" id="formulario_uploadPhoto">
							<input
								name="formulario_uploadPhoto"
								type="file"
								accept="image/png,image/jpeg"
								onChange={(e) => handleImage(e)}
							></input>
						</div>
					</div>
				)}

				{inputImage && (
					<div className="data-image">
						<img
							className="img-primary"
							alt="estado"
							src={
								!inputImage
									? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
									: URL.createObjectURL(inputImage.target.files[0])
							}
						/>
						<div className="input-form">
							<input
								className="input-title"
								required
								id="formulario_title"
								placeholder="Nombre del archivo"
								onChange={(e) => handleTitle(e)}
								value={formData.title.value || ""}
							></input>
							<textarea
								id="formulario_title"
								required
								className="input-description"
								placeholder="Descripcion"
								value={formData.description.value || ""}
								onChange={handleDescription}
							></textarea>
							<div className="prices-category">
								<label>
									<input
										type="radio"
										name="color"
										value="gratis"
										defaultChecked
										onChange={(e) => handlePricePay(e)}
									/>{" "}
									Gratis
								</label>
								<label>
									<input type="radio" name="color" value="paga" onChange={(e) => handlePricePay(e)} /> De
									pago
								</label>
							</div>

							<input
								type="number"
								className="input-price"
								placeholder="Fijar precio"
								value={formData.price.price || ""}
								onChange={(e) => handlePriceValue(e)}
							></input>
							<button className="input-submit" type="submit">
								<img src={Upload} className="icon-submit" alt="icono boton submit" /> Subir
							</button>
						</div>
					</div>
				)}
			</form>
			<Footer />
		</>
	);
}
