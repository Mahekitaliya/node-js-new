const cart = require("../model/cart.model");

exports.aadtocart = async (req , res) => {
    try {
        let userId = req.user._id;
        let cart = await cart.findone({
            user : userId,
            productId : req.body.productId,
            isDelete : false,
        });

        if(cart){
            return res.json({message: 'already exist......'})
        }

    cart = await cart.create({user: userId, ...req.body});
    res.status(201).json({message :'cart Added', cart});
    
    }catch(err){
        console.log(err);
        res.status(500).json({message: "server Error"});

    }
};


exports.getAllCarts = async  (req,res) => {
    let carts = await cart.find({ user: req.user._id, isDelete:false})
    res.json(carts);
}
