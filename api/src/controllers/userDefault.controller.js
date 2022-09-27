const userDefaultSchema = require('../models/userDefault')
const bcrypt = require('bcrypt')

const allUsers = async(req, res)=>{
    try {
        const users = await userDefaultSchema.find()
        res.json(users)        
    } catch (error) {
        console.error(error)
    }
};

const registerUser = async(req, res)=>{
    try {
        const {avatar, name, lastName, email, password} = req.body
    
        const passwordHash = await bcrypt.hash(password, 10)
      
        const user = await userDefaultSchema({      
          avatar: avatar || 'https://www.seekpng.com/png/full/847-8474751_download-empty-profile.png',
          name,
          lastName,
          email,
          password: passwordHash,
        })
      
        await user.save()
              
        res.send({
            msg: 'Usuario y cuenta creados',
            user
        })
        
    } catch (error) {
        console.error(error)
    }
};

const updateUser = (req, res)=>{
    userDefaultSchema.updateOne(
        {_id: req.params.id},
        req.body
      )
        .then(() => res.send('datos actualizados correctamente'))
        .catch((error) => res.json({message: error}))
};

const deleteUser = (req, res)=>{    
    userDefaultSchema.findByIdAndDelete(req.params.id)
        .then(() => res.send('usuario eliminado correctamente'))
        .catch((error) => res.json({message: error}))    
}
module.exports = {allUsers, registerUser, updateUser, deleteUser}