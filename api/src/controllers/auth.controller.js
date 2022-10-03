const userSchema = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// ------ register ------
const singIn = async (req, res) => {
	try {
		const {avatar, name, lastName, email, password, userType} = req.body    

		if(!(await userSchema.findOne({email: email}))){
			const passwordHash = await bcrypt.hash(password, 10)

			const newUser = await userSchema({      
				avatar: avatar || 'https://www.seekpng.com/png/full/847-8474751_download-empty-profile.png',
				name,
				lastName,
				email,
				password: passwordHash,
				userType,
			})      
			await newUser.save()

			const token = jwt.sign({id: newUser._id}, process.env.SECRET_KEY , {
				expiresIn: 86400
			})

			return res
				.status(200)
				.json(token)
		}

		return res
			.status(404)
			.send({ msg: 'El mail ya esta asociado a un Usuario existente' });
		
	} catch (error) {
			console.error(error)
	}
};


// ------ login ------
const singUp = async (req, res) => {
	const {email, password} = req.body

	if(!email || !password){
			return res
				.status(404)
				.send('falta mail o password')
	} 
	
	else if(email && password){
		const user = await userSchema.findOne({email: email})
		if(user) {
			const matchPassword = await userSchema.comparePassword(password, user.password)
			if(!matchPassword) return res .status(404).send('no funciono la contra')
			return res
					.status(200)
					.send('funciono la contra')
		}
		return res
			.status(404)
			.send('Usuario no encontrado, revisar email escrito o registrate')
	}

	return res .status(404).send('no funciono')
}

module.exports = { singIn, singUp };
