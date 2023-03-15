const cart = require('../models/carritos')
const product = require('../models/productos')
const logger = require('../helpers/log4js')

const addProductCart = async (req, res) => {
	const { title, price, thumbnail } = req.body
	console.log (title)

	const estaEnProduct = await product.findOne({ title })
	console.log(estaEnProduct)

	const noVacios = title !== "" && thumbnail !== "" && price !== ""

	const enCart = await cart.findOne({ title })

	if (!estaEnProduct) {
		res.status(400).json({
			mensaje: 'este producto no existe'
		})
	} else if (noVacios && !enCart) {
		const newProductCart = new cart({ title, price, thumbnail, amount: 1 })

		await product.findByIdAndUpdate(
			estaEnProduct?._id,
			{ inCart: true, title, price, thumbnail },
			{ new: true }
		)
			.then((products) => {
				newProductCart.save()
				logger.info('Producto agregado al carrito')
			})
			.catch((error) => console.error(error))
	} else if (enCart) {
		logger.error('Producto ya se encuentra en el carrito')
	}

}

module.exports = addProductCart