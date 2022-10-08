import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPhotoForm } from "../../redux/actions/photosActions";
import Upload from "../../assets/upload.svg";

export default function FormularioFoto({ x }) {
  const currentUser = useSelector((state) => state.userLoged.currentUser);
  const [formData, setFormData] = useState({
    title: { value: null },
    description: { value: null },
    image: { value: null, loading: false },
    price: { pay: false, price: null },
    ubication:{ value: null },
    tags:{ value: null },
    photographer:{ value: currentUser._id },
    error: null,
  });
console.log('formData', currentUser)
  const [estado, setEstado] = useState({
    value: "not uploaded yet",
    status: false,
  });

  useEffect(() => {
    setFormData({ ...formData, image: { value: x } });
  }, [formData, x]);

  async function handleSubmit(e) {
    e.preventDefault();
    const a = uploadPhotoForm({
      ...formData,
    });
    const d = await a();

    if (d.message === "Publicacion creada correctamente") {
      setFormData({
        title: { value: null },
        description: { value: null },
        image: { value: null, loading: false },
        price: { pay: false, price: null },
        ubication:{ value: null },
        tags:{ value: null },
        photographer:{ value: null },
      });
      setEstado({
        value: "Photo Uploaded Correctly",
        status: true,
      });
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
    setFormData({
      ...formData,
      price: { ...formData.price, price: e.target.value },
    });
  }

  const handleUbication = (e) => {
    setFormData({
      ...formData,      
      ubication: { value: e.target.value }
    })
  }

  const handleTags = (e) => {
    setFormData({
      ...formData,      
      tags: { value: e.target.value }
    })
  }

  return estado.status ? (
    <div style={{ textAlign: "center", width: "100%" }}>{estado.value}</div>
  ) : (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="data-image">
        <img className="img-primary" alt="estado" src={x} />
        <div className="input-form">
          <input
            className="input-title"
            required
            id="formulario_title"
            placeholder="Nombre del archivo"
            onChange={(e) => handleTitle(e)}
            name='title'
            value={formData.title.value || ""}
          ></input>

          <input
            className="input-ubication"
            required
            id="formulario_ubication"
            placeholder="Ubicación: País - Provincia - Ciudad"
            onChange={(e) => handleUbication(e)}
            name='ubication'
            value={formData.ubication.value || ""}
          ></input>

          <input
            id="formulario_tags"
            required
            className="input-tags"
            placeholder="Etiquetas: Playa / Bosque / Desierto / Noche / Día"
            value={formData.tags.value || ""}
            name='tags'
            onChange={(e) => handleTags(e)}
          ></input>

          <textarea
            id="formulario_title"
            required
            className="input-description"
            placeholder="Descripcion"
            value={formData.description.value || ""}
            name='description'
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
              <input
                type="radio"
                name="color"
                value="paga"
                onChange={(e) => handlePricePay(e)}
              />{" "}
              De pago
            </label>
          </div>

          <input
            type="number"
            className="input-price"
            placeholder="Fijar precio"
            value={formData.price.price || ""}
            name="price"
            onChange={(e) => handlePriceValue(e)}
          ></input>
          <button className="input-submit" type="submit">
            <img
              src={Upload}
              className="icon-submit"
              alt="icono boton submit"
            />{" "}
            Subir
          </button>
        </div>
      </div>
    </form>
  );
}
