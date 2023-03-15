const finCompraController = {}
const sms = require('../config/sms')


finCompraController.finCompra = async (req, res) => {
    sms.sendSMS()
    res.render('finCompra')
      
}

module.exports = finCompraController