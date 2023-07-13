const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
    

module.exports.connection= function(){
    mongoose.connect('mongodb://localhost/Msub',()=>{
    try {
        console.log('database connected');
    } catch (error) {
        console.log(error);
    }
    
})}
;

