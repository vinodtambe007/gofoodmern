const Product=require("../models/productModel")


//Create product
exports.createProduct=async (req,res,next)=>{
  const product=await Product.create(req.body);

  res.status(201).json({
    success:true,
    product
  })
}

exports.getAllProducts=(req,res) =>{
  res.status(200).json({message:"route is working fine"})
}