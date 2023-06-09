const product = require('../models/productos')

class productsDao {
  
    async add(prodAdd) {

        try {
            const newProduct = new product(prodAdd)
            return await newProduct.save()
        }
        catch (error) {
            console.log(error)
        }
        
    }

   
    async getAll() {
        try {
            const buscados = await product.find().lean()
            return buscados
        } catch{
            logger.error('Error al traer todos los productos  el producto')
        }
    }

    async getById(idBuscado) {
        let buscado
        try {
            buscado = await product.findById(req.params.id)
        } catch (err) {
            logger.error('Error buscando el producto por id ')
        }

        if (!buscado) {
            logger.error('Error , es porducto no existe ')
        }

        return [buscado]
    }

    async updateProduct(id, newProduct){
        const productUpdated = await product.findOneAndUpdate({ id: id }, { $set: newProduct })
        return asDto(productUpdated)
    }

    async deleteById(idParaBorrar) {
        const deleted = await product.findOneAndDelete({ id: idParaBorrar })
        return asDto(deleted)
    }

    async deleteAll() {
        await product.deleteMany({})
    }
}

module.exports = productsDao 