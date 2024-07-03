//import
const express = require('express');
const app = express();
const cors =require('cors');
const productRoute = require('./routes/product-route/product-route')

//middlewares
app.use(cors())
app.use(express.json());

//service
app.use('/product', productRoute)
app.use('/dashboard')

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server on", port));

console.log(port);