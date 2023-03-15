const cartController = {}
const cart = require('../models/carritos')


cartController.getProductsCart = async (req, res) => {
    const productsCart = await cart.find().lean()
    res.render('carrito', {
        productos: productsCart,
    })
}





module.exports = cartController