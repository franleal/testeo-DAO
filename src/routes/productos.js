const {Router} = require('express')
const router = Router()

const { getProductUpdate, addProduct, getProduct, getAllProducts, deleteAll, deleteProduct  } = require('../controllers/productController')



router.post('/api/productos', addProduct)

router.get('/api/productos/:id', getProduct)

router.get('/api/productos', getAllProducts)

router.delete('/api/productos', deleteAll)

router.delete('/api/productos', deleteProduct)

router.delete('/api/productos', getProductUpdate)

module.exports = router