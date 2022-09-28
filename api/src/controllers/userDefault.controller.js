const userDefaultSchema = require('../models/userDefault')
const bcrypt = require('bcrypt')

const allUsers = async(req, res)=>{
    try {
        const users = await userDefaultSchema.find()
        if(users.length === 0) {
            return res
              .status(201)
              .json({message: 'aún no hay usuarios'})
        }
        res.json(users)        
    } catch (error) {
        console.error(error)
    }
};

const registerUser = async(req, res)=>{
    try {
        const {avatar, name, lastName, email, password} = req.body    

        //Validate if password is strong (at least eight characters, one uppercase, one lowercase and one number)
        if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
            return res.status(400).json({
            message:                
                'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número',
            });
        }
        const passwordHash = await bcrypt.hash(password, 10)

        //Validation of format email
        if (
            !email.match(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
          ) {
            return res.status(400).json({
              error: 'Formato de email no válido',
            });
        }

        //Validation if there is an email associate a user existent
        if(!(await userDefaultSchema.findOne({email: email}))){
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
        }else{
            res.send({ msg: 'El mail ya esta asociado a un Usuario existente' });
        }
    } catch (error) {
        console.error(error)
    }
};

const updateUser = async(req, res)=>{
    try {
        //Validation if there is an _id associate a user existent
        if(await userDefaultSchema.findOne({_id: req.params.id})){
            await userDefaultSchema.updateOne(
                {_id: req.params.id},
                req.body
            )
            res.send('datos actualizados correctamente')
        }else{
            res.send({ msg: 'El Usuario no existente' });
        }
    } catch (error) {
        console.error(error)
    }
};

const deleteUser = async(req, res)=>{    
    try {
        //Validation if there is an _id associate a user existent
        if(await userDefaultSchema.findOne({_id: req.params.id})){
            await userDefaultSchema.findByIdAndDelete(req.params.id)
            res.send('usuario eliminado correctamente')
        }else{
            res.send({ msg: 'El Usuario no existente' });
        }
    } catch (error) {
        console.error(error)
    }    
};

module.exports = {allUsers, registerUser, updateUser, deleteUser}