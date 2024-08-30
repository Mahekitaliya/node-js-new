
require("dotenv").config()
const express = require('express');
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT;
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan("dev"));


server.get("/",(req,res)=>{
    res.send("Welcome to the Express server");
});

// Product routes
const productRoutes = require("./routes/prouduct.routes");
server.use("/api/product",productRoutes);

// User routes
const userRoutes = require("./routes/user.routes");
server.use("/api/users",userRoutes);

server.listen(port,()=>{
    // Database connection
    mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log(`Database connected..👍`))
    .catch(err=>console.log(err))
    console.log(`server start http://localhost:${port}`);
})



/*
    git checkout -b sk-1
    git add .
    git commit -m "Your commit"
    git push -u origin sk-1
*/