const productController = {}
const productApi = require('../Api/ApiProducts')

let productApiInstance = new productApi()


productController.addProduct = async (req,res)=>{
    const { title, price, thumbnail, description } = req.body
    await productApiInstance.add({ title, price, thumbnail, description })
}


productController.getProduct = async (req, res) => {
    console.log(req.params.id)
    productById = await productApiInstance.serchId(req.params.id)
    console.log(productById)
    res.send(productById)
}

productController.getAllProducts = async (req, res) => {
    
    allProducts = await productApiInstance.serch()
    console.log(allProducts)
    res.render('productos', {
            productos: allProducts,
            title: "Productos con Handlebars",
    })
}


productController.getProductUpdate = async (req, res) => {
    productUpdate = await productApiInstance.replace(req.params.id, { title, price, thumbnail, description })
    res.send(productUpdate)
}


productController.deleteProduct = async (req, res) => {
    productDeleted = await productApiInstance.deleteById(req.params.id)
    res.send(productDeleted)
}


productController.deleteAll = async (req, res) => {
    borrar = await productApiInstance.delete()
    console.log(borrar)
    res.send(borrar)
}



module.exports = productController 