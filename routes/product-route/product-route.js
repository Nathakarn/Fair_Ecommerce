const express = require('express')
const productController = require('../../controllers/product-controller/product-controller')

const productRoute = express.Router()

productRoute.post('/',productController.createProduct)
productRoute.get('/', () =>{})


module.exports = productRoute