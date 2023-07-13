const { ObjectId } = require('mongodb');
const mongoose=require('mongoose')
const { Schema } = mongoose;

const moviesschema = new Schema({
    name:String,
    year:Number,
    language:String,
    genre:String,
    review:String,
    
})


module.exports= mongoose.model('Movies', moviesschema);