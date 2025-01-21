// MVC - model view controller
const fs = require('fs');
const path = require('path')
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'data.json', 'utf-8')));
const users= data.users;

exports.createUser = (req,res)=>{
  console.log(req.body);
  users.push(req.body);
  res.json(req.body);
}

exports.getAllUsers = (req,res)=>{
  res.json(users);
}

exports.getUser = (req,res)=>{
  console.log(req.params)
  const id = +req.params.id;
  const user = users.find((p=>p.id === id))
  res.json(user);
}

exports.replaceUser = (req,res)=>{
  const id = +req.params.id;
  const productIndex = users.findIndex(p=>p.id === id)
  users.splice(productIndex, 1, {...req.body, id:id})
  res.status(201).json();
}

exports.updateUser = (req,res)=>{
  const id = +req.params.id;
  const productIndex = users.findIndex(p=>p.id === id)
  const product = users[productIndex];
  products.splice(productIndex, 1, {...product, ...req.body})
  res.status(201).json();
}

exports.deleteUser = (req,res)=>{
  const id = +req.params.id;
  const productIndex = users.findIndex(p=>p.id === id)
  const product = users[productIndex];
  users.splice(productIndex, 1)
  res.status(201).json(product);
}
