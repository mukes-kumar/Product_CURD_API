
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const { type } = require('os');
const morgan = require('morgan');
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const cors = require('cors')

console.log("Mukesh hii",process.env.DB_PASSWORD)


//  db connections
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Successfully Connected")
}



// body Parser from Postman
server.use(cors());
server.use(express.json());
server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR))
// esase localhost/api/product path par data milega
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
server.use('*',(req,res) => {
  res.sendFile(__dirname+'/build/index.html')
})


// CURD API 

server.listen(process.env.PORT,()=>{
  console.log('server started')
});