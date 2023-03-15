const {Router} = require('express')
const router = Router()

const{renderUserRegister,renderloginUser,logOut,loginUser,addUser} = require('../controllers/usersController')

router.get('/api/register',renderUserRegister)

router.post('/api/register',addUser)

router.get('/',renderloginUser)

router.post('/',loginUser)

router.get('/api/logout',logOut)

module.exports = router