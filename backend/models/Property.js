const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    purpose:{
        type:String,
        required:true,
    },
    propertyType:{
        type:String,
        required:true
    },
    staus:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    bedrooms:{
        type:String,
        required:true
    },
    amenties:{
        type:String,
        required:true
    },
    images:{
        type:String,
    },
    heighlights:{
        types:String,
    },
    owners:{
        type: mongoose.Schema.Types.ObjectId,
        Ref: 'Owner',
        required:true
    }
})