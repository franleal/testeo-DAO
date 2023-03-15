const usersController = {}
const User = require( "../models/User");
const passport = require("passport");
const logger = require('../helpers/log4js')

usersController.renderUserRegister = (req,res)=>{
    res.render('register')
}

usersController.addUser = async(req,res)=>{
    const {email, password,nombre,direccion,edad,telefono,foto} = req.body
    const emailUser = await User.findOne({email:email})
    if(emailUser){
        logger.error('Este email ya esta registrado')
        res.redirect("/api/register")
    }else{
        const newUser = new User({ email, password, nombre, direccion, edad, telefono, foto })
        newUser.password = await newUser.encryptPassword(password);
        res.redirect("/")
        logger.info('El usuario fue registrado exitosamente')
        await newUser.save()
       
    }
}


usersController.renderloginUser = (req,res)=>{
    res.render('login')
}

usersController.loginUser = passport.authenticate('local',{
    failureRedirect:'/',
    successRedirect:'/api/productos',

})

usersController.logOut = (req,res)=>{
    
}



module.exports = usersController