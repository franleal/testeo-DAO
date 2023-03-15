const {Router} = require('express')
const router = Router()

const { renderProduct, addProduct, getProduct, getAllProducts } = require('../controllers/productController')



router.post('/api/productos', addProduct)

router.get('/api/productos/:id', getProduct)

router.get('/api/productos', getAllProducts)

module.exports = router