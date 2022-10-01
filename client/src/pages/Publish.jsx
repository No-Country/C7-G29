import { useState } from "react";
import {
  uploadPhotoForm,
  uploadPhotoToCloudinary,
} from "../redux/actions/photosActions";

export default function Publish() {
  const [formData, setFormData] = useState({
    title: { value: null },
    description: { value: null },
    image: { value: null, loading: false },
    price: { paga: false, price: null },
    error: null,
  });

  async function handleImage(e) {
    setFormData({ ...formData, image: { loading: true, value: null } });
    const response = uploadPhotoToCloudinary(e);
    const d = await response();
    setFormData({ ...formData, image: { loading: false, value: d } });
  }

  function publishButton() {
    if (
      formData.title.value !== null &&
      formData.description.value &&
      formData.image.value &&
      (formData.price.price || !formData.price.paga)
    ) {
      return <button>Subir Publicacion</button>;
    } else return <button disabled>Subir Publicacion</button>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const a = uploadPhotoForm(formData);
    const d = await a();
    if (d.message === "Publicacion creada correctamente") {
      setFormData({
        title: { value: null },
        description: { value: null },
        image: { value: null, loading: false },
        price: { paga: false, price: null },
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
  function handleDescription(e) {
    setFormData({ ...formData, description: { value: e.target.value } });
  }
  function handlePrice(e) {
    setFormData({
      ...formData,
      price: { ...formData.price, price: e.target.value },
    });
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="formulario_title">Titulo: </label>
      <input
        id="formulario_title"
        placeholder="Title..."
        onChange={(e) => handleTitle(e)}
        value={formData.title.value || ""}
      ></input>
      <label htmlFor="formulario_title">Descripcion: </label>
      <textarea
        id="formulario_title"
        placeholder="Descripcion..."
        onChange={(e) => handleDescription(e)}
        value={formData.description.value || ""}
      ></textarea>
      <label htmlFor="formulario_uploadPhoto">Subir Foto:</label>
      <input
        id="formulario_uploadPhoto"
        type="file"
        onChange={(e) => handleImage(e)}
      ></input>
      <img
        alt="estado"
        src={
          formData.image.loading
            ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            : formData.image.value
            ? formData.image.value
            : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6"
        }
        style={{ width: "100px", height: "100px" }}
      ></img>
      <input
        type="button"
        value={formData.price.paga ? "Paga" : "Gratis"}
        onClick={() =>
          setFormData({
            ...formData,
            price: { ...formData.price, paga: !formData.price.paga },
          })
        }
      ></input>
      {formData.price.paga ? (
        <input
          type="number"
          onChange={(e) => handlePrice(e)}
          value={formData.price.price || ""}
        ></input>
      ) : null}

      {publishButton()}
    </form>
  );
}
