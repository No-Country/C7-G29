import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer-links">
				<div className="nuestra-app">
					<h1 className="title-section title-app">Descarga nuestra app para móvil </h1>
					<div className="app-links">
						<Link className="link btn-store" href="/">
							<i class="fab fa-apple icon"></i>
							IOS
						</Link>
						<Link className="link btn-store" href="/">
							<i class="fab fa-android icon-store icon"></i>
							Android
						</Link>
					</div>
				</div>
				<div className="seguinos">
					<h1 className="title-section">Seguinos</h1>
					<div className="links-section">
						<Link className="link" href="/">
							<i class="fab fa-twitter icon"></i>
							Twiiter
						</Link>
						<Link className="link" href="/">
							<i class="fab fa-facebook-square icon"></i>
							Facebook
						</Link>
						<Link className="link" href="/">
							<i class="fab fa-instagram-square icon"></i>
							Instagram
						</Link>
					</div>
				</div>
				<div className="Darkroom">
					<h1 className="title-section">Darkroom</h1>
					<div className="links-section">
						<Link className="link" href="/">
							Nuestras galerias
						</Link>
						<Link className="link" href="/">
							Retos
						</Link>
						<Link className="link" href="/">
							Colección
						</Link>
						<Link className="link" href="/">
							Lo más descargado
						</Link>
						<Link className="link" href="/">
							Nuestra app
						</Link>
					</div>
				</div>
				<div className="Compañia">
					<h1 className="title-section">Compañía</h1>
					<div className="links-section">
						<Link className="link" href="/">
							¿Quienes Somos?
						</Link>
						<Link className="link" href="/">
							Preguntas Frecuentes
						</Link>
						<Link className="link" href="/">
							Emprende con nosotros
						</Link>
						<Link className="link" href="/">
							Politicas y privacidad
						</Link>
						<Link className="link" href="/">
							Blog
						</Link>
					</div>
				</div>
			</div>
			<div className="copyright">
				<Link className="link"> © 2022 Darkroom</Link>
				<Link className="link">Licencia</Link>
				<Link className="link">Términos y condiciones</Link>
				<div>
					<Link className=" link  language-link">
						<i class="fas fa-globe"></i> Español
					</Link>
				</div>
			</div>
		</div>
	);
}
