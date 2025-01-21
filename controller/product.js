// MVC - model view controller
const fs = require('fs');

const model = require('../model/product');
const { mongoose } = require('mongoose');
const Product = model.Product;

// post => create
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    // Save the product asynchronously
    const doc = await product.save();

    // Send the saved product as the response
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);

    // Handle errors and send an error response
    res.status(500).json({ error: 'Failed to create product', details: err.message });
  }
};

// get
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json(products);
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: 'Failed to getAll products', details: err.message });
  }
}
// get 
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
}


// put => replace
exports.replaceProduct = async(req, res) => {
  const id = req.params.id;
 try {
   const doc = await Product.findOneAndReplace({_id: id}, req.body, {new:true})
   res.status(201).json(doc);
 } catch (error) {
   console.log(error);
   res.status(500).json(error);
 }
}

// patch => update
exports.updateProduct = async(req, res) => {
  const id = req.params.id;
 try {
   const doc = await Product.findOneAndUpdate({_id: id}, req.body, {new:true})
   res.status(201).json(doc);
 } catch (error) {
   console.log(error);
   res.status(500).json(error);
 }
}

// delete
exports.deleteProduct = async(req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({_id: id}, req.body, {new:true})
    res.status(201).json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
