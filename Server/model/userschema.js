const mongoose=require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  email: String,
  mobilenumber:Number,
  password:String,
  isAdmin:Boolean
})
module.exports= mongoose.model('User', userSchema);