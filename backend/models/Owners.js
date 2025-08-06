const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   mobile_no:{
    type:Number,
    required:true
   },
   Address:{
    type:Number,
    required:true
   },
   owner_type:{
    type:String,
    required:true
   }
})