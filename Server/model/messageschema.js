const mongoose=require('mongoose')
const { Schema } = mongoose;
const messageschema= new Schema({
    name:String,
    email:String,
    subject:String,
    message:String,
    time:String,
    date:String

})
module.exports= mongoose.model('Message', messageschema);