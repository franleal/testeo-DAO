const{Schema,model}= require('mongoose')

const CartSchema = new Schema({
    title: { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true },
    amount: { type: Number, required: true },
    price: { type: Number, required: true }
})
    

module.exports = model('carts',CartSchema)