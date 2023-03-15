const { Router } = require('express')
const router = Router()

const { getProductsCart } = require('../controllers/cartController')
const addProductCart = require('../controllers/addProductCart')
const putProduct = require('../controllers/putProductCart')

router.get('/api/carrito', getProductsCart)
/*router.post('/api/carrito', addProductCart)*/
router.put('/api/carrito', putProduct)



module.exports = router