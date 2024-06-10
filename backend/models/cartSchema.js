const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    item_name: String,
    price: Number,
    image: String,
    user_id: String
})

const Cart = new mongoose.model('Cart', cartSchema);

module.exports=Cart;