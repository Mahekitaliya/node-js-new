// npm init /npm init -y(defualt)

const express = require('express');

// http.createserver();

const server = express();

// CRUD -> create(post) , read(get), update(put,patch), delete(delete)

server.get("/",(req,res)=>{
    res.write('welcome to Express server');
    res.end();

})

//  server.get("/",(req,res)=>{
//     res.send('get method -1');
// })

server.get("/sd",(req,res)=>{
    res.status(200);
    res.json({message :'user get method'});
})


server.listen(1234,()=>{
    console.log(`server start at http://localhost:1234`)
});