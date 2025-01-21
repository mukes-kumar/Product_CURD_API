// schema
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {type: String , require: true}, // String is shorthand for {type: String}
  description: String,
  price: {type:Number , min: [1, 'wrong min price']},
  discountPercentage: {type:Number , min: [0, 'wrong min discount'], max: [50, ' wrong max discount']},
  rating: {type:Number , min: [0, 'wrong min rating'], max: [10, ' wrong max rating'], default: 0},
  brand: {type: String , require: true},
  category: {type: String , require: true},
  thumbnail: {type: String , require: true},
  images: [ String]
});

exports.Product = mongoose.model('Product', productSchema);
