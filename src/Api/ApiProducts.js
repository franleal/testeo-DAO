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

   
    async delete(){
        try {
            const deleteAll = await this.productDao.deleteAll();
            return deleteAll
        }
        catch (error) {
            console.log(error)
        }
    }

    async deleteById(id) {
        try {
            const deleteId = await this.productDao.deleteById(id);
            return deleteId
        }
        catch (error) {
            console.log(error)
        }
    }


    async replace(id, prodParaReemplazar) {
        const prodReplaced = await this.productDao.updateProduct(id, prodParaReemplazar);
        return prodReplaced;
    }
}

module.exports = productsApi 