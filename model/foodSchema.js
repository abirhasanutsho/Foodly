const mongoose = require("mongoose");

 const FoodSchema = new mongoose.Schema({

     title : {type : String ,required : true},
     time : {type : String, required : true},
     foodTag : {type : Array, required : true},
     category : {type : String, required : true},
     foodType : {type : Array , required : true},
     code : {type : String , required : true},
     isAvailable : {type : Boolean, required : true},
     restaurant : {type : mongoose.Schema.Types.ObjectId,required : true},
     rating : {type : Number ,min : 1,max : 5,default : 3},
     ratingCount : {type : String ,default : "200"},
     description : {type : String , required : true},
     price : {type : Number, required : true},
     addictives : {type : Array, default : []},
     imageUrl : {type : Array, required : true},

 });

 module.exports = mongoose.model("Food",FoodSchema);

