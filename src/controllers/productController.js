const productController = {}
const productApi = require('../Api/ApiProducts')

let productApiInstance = new productApi()


productController.addProduct = async (req,res)=>{
    const { title, price, thumbnail, description } = req.body
    await productApiInstance.add({ title, price, thumbnail, description })
}



productController.getProduct = async (req, res) => {
    productById = await productApiInstance.serchId(req.params.id)
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



module.exports = productController 