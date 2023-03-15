const productDao = require('../DAOs/productsDao')

class productsApi {
    constructor() {
        this.productDao = new productDao()
    }

    async add(prodAdd) {
        try {
            const prodAdded = await this.productDao.add(prodAdd)
            return prodAdded
        }
        catch (error) {
            console.log(error)
        }
    }

    async serchId(id) {
        try {
            const productosId = await this.productDao.getById(id)
            return productosId
        }
        catch (error) {
            console.log(error)
        }
       
    }

    async serch() {
        try {
            const productos = await this.productDao.getAll()
            return productos
        }
        catch (error) {
            console.log(error)
        }
        
       
    }

    async delete(id) {
        if (id) {
            await this.productDao.deleteById(id);
        }
        else {
            await this.productDao.deleteAll();
        }
    }

    async replace(id, prodParaReemplazar) {
        const prodReplaced = await this.productDao.updateById(id, prodParaReemplazar);
        return prodReplaced;
    }
}

module.exports = productsApi 