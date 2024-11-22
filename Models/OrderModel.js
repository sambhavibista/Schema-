const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, 
  quantity: { type: Number, required: true, min: 1 }, 
  priceAtPurchase: { type: Number, required: true, min: 0 }, 
});


const shippingAddressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    ward: { type: String, required: true },
});


const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  products: [productSchema],
  totalAmount: { type: Number, required: true, min: 0 }, 
  paymentStatus: {
    type: String,
    enum: ['Paid', 'Pending', 'Failed'],
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned'], 
    default: 'Processing', 
  },
  shippingAddress: shippingAddressSchema, 
  timestamp: { type: Date, default: Date.now }, 
}, {
  timestamps: true, 
});


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
