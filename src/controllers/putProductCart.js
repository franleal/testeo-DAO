const cart = require('../models/carritos')

const putProduct = async (req, res) => {
    const { productId } = req.params
    const { query } = req.query
    const body = req.body

    const productoBuscado = await cart.findOne(productId)

    if (!query) {
        logger.error('debes enviar una querry')
    } else if (productoBuscado && query === "add") {
        body.amount = body.amount + 1

        await cart.findByIdAndUpdate(productId, body, {
            new: true,

        }).then((products) => {
            logger.info('Producto actualizado')
        })
    } else if (productoBuscado && query === "del") {
        body.amount = body.amount - 1
        await cart.findByIdAndUpdate(productId, body, {
            new: true,
        }).then((products) => {
            logger.info('Producto actualizado')
        })
    }
}

module.exports = putProduct