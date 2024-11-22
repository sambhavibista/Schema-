const mongoose = require('mongoose');


const cartProductSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, 
  quantity: { type: Number, required: true, min: 1 }, 
});


const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  products: [cartProductSchema], 
  totalAmount: { type: Number, required: true, min: 0 }, 
}, {
  timestamps: true, 
});


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
