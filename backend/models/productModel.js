const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
     name:{
        type:String,
        required:[true,"please enter product name"],
        trim:true
     },
     description:{
        type:String,
        required:[true,"please enter product Description"]
     },
     price:{
        type:Number,
        required:[true,"please enter product price"],
        maxLength:[8,"price cannpot exceeds 8 charecters"]
     },
     rating:{
        type:Number,
        default:0
     },
     images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
         },
     ],
     category:{
        type:String,
        required:[true,"please enter Category"],

     },
     stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[4,"please cannot excedds 4 charecters"],
        default:1
     },
     numOfReviews:{
        type:Number,
        default:0
     },
     reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            Comment:{
                type:String,
                required:true
            }
        }
     ],
     createdAt:{
        type:Date,
        default:Date.now
     }

       
})

module.exports=mongoose.model("product",productSchema)