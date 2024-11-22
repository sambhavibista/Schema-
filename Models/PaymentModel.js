const mongoose = require('mongoose');


const paymentSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true }, 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  amount: { type: Number, required: true, min: 0 }, 
  method: {
    type: String,
    enum: ['Credit Card', 'Bank Transfer'], 
    required: true,
  },
  status: {
    type: String,
    enum: ['Successful', 'Pending', 'Failed'], 
    required: true,
  },
  timestamp: { type: Date, default: Date.now }, 
}, {
  timestamps: true, 
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
