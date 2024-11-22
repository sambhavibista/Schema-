const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  rating: { type: Number, required: true, min: 1, max: 5 }, 
  review: { type: String }, 
});

// Define the main Product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 }, 
  category: { type: String, required: true },
  brand: { type: String },
  stock: { type: Number, required: true, min: 0 }, 
  images: { type: [String], default: [] }, 
  ratings: [ratingSchema], 
}, {
  timestamps: true, 
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
