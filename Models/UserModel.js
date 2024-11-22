const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  ward: { type: String, required: true },
});

const orderHistorySchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true }, 
});

// main User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  address: [addressSchema], // Embedding address schema
  orderHistory: [orderHistorySchema], // Embedding orderHistory schema
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' }, 
}, {
  timestamps: true, 
});


const User = mongoose.model('User', userSchema);

module.exports = User;
