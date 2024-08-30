const express = require("express");
const cartRoutes = express.Router();
const{
    addtocart,
    getAllCarts,
 
} = require ("../controller/cart.controller");
const { varifyToken } = require('../helpers/tokenVerify');

cartRoutes.post("/",varifyToken , addtocart);
cartRoutes.get("/",varifyToken,getAllCarts);

module.exports = cartRoutes;

