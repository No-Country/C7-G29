// const userDefault = require("../models/userDefault");
// const userPhotographer = require("../models/userPhotographer");

// ------ register ------
const singIn = async (req, res) => {
	// const userFound = await userDefault.findOne({ email: req.body.email });
	// const userPhotographerFound = await userPhotographer.findOne({ email: req.body.email });
	// if (!userFound && !userPhotographerFound)
	// 	return res.status(404).json({ message: "Usuario no encontrado" });
	// res.json(userFound || userPhotographerFound);
};

// ------ login ------
const singUp = async (req, res) => {

}

module.exports = { singIn, singUp };
