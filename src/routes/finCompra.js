const { Router } = require('express')
const router = Router()

const { finCompra } = require('../controllers/finCompraController')


router.get('/api/fin', finCompra)





module.exports = router