const express = require("express");
const publication = require("../models/publication");
const userPhotographer = require("../models/userPhotographer");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const photo = await publication.find().populate("photographer", {
      _id: 1,
      name: 1,
      lastName: 1,
    });
    if (photo.length === 0) {
      return res.status(201).send({ message: "No hay publicaciones creadas" });
    }
    return res.status(201).json(photo);
  } catch (error) {
    return res.status(400).send({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      url,
      likes,
      downloads,
      price,
      pay,
      photographer,
      challenge,
    } = req.body;

    const userPhoto = await userPhotographer.findById(photographer);

    const photo = await publication({
      title,
      description,
      url,
      likes,
      downloads,
      price,
      pay,
      photographer,
      challenge,
      photographer: userPhoto._id,
    });
    await photo.save();

    userPhoto.publications = userPhoto.publications.concat(photo._id);
    await userPhoto.save();

    return res
      .status(201)
      .send({ message: "Publicacion creada correctamente" });
  } catch (error) {
    return res.status(400).send({ message: error });
  }
});

router.put("/:id", async (req, res) => {
  await publication.updateOne({ _id: req.params.id }, req.body);

  res.send("datos actualizados correctamente");
});

router.delete("/:id", async (req, res) => {
  await publication.findByIdAndDelete(req.params.id);
  res.send("Pulicacion eliminada correctamente");
});

module.exports = router;
