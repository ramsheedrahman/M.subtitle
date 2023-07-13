const express = require('express');
const jwt = require("jsonwebtoken");
const Movies=require('../model/moviesschema')
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/userschema')
const Message=require('../model/messageschema')
const path=require('path');
const { error } = require('console');
let loginstatus=false;


router.post('/register',async(req,res)=>{
    let {name,email,mobilenumber,password}=req.body
    let isAdmin=false
         bcrypt.hash(password,10,(err,hash)=>{
            if(hash){
                
                User.create([{
                    name,
                    email,
                    mobilenumber,
                    password:hash,
                    isAdmin
                }])
                console.log('hash',hash);
            }else{
                console.log(err);
            }
            
         })
       
 
    })



router.post('/login', async(req, res) => {
    let { email, password } = req.body
    let user=await User.findOne({ email})
    if (user){
        bcrypt.compare (password,user.password,async(err,result)=>{
           if(result){
            
           var token=  jwt.sign({userId:user._id},'msubuser')
            res.json({message:'login success', token})
           
           }
           else{
           return  res.json({message:'enter valid password'})
           }
        })
    } 
        
    else{
        return res.json({message:'pls enter valid email'})
    }
    


})

router.get('/getuser',async(req,res)=>{
    const header=req.headers;
    let token=header.authorization;
    console.log(token);
    if(token){
      const decoded =await jwt.verify(token, 'msubuser')
            
            const user=await User.findById(decoded.userId)
        
          return res.json({user})
          }else{
            console.log('token invalid');
            return res.json('token invalid')
        }
     } );
    
     

router.get('/downloadpage/:id',async(req,res)=>{
    const id=req.params.id
    const Moviesub=await Movies.findById(id)
    return res.json(Moviesub)

})

router.get('/downloadsub/:id',async(req,res)=>{
    const id=req.params.id
    console.log( 'download id',id);
    res.download(path.join(__dirname,'subtitle/'+id+'.srt'))
   
})

// router.get('/search',async(req,res)=>{
//     let key=req.body.key
//     const data= await Movies.find({
//         "$or":[
//             {name:{$regex:key}}
//         ]
//     })
//    return res.json(data)
// })

router.post('/contact',async(req,res)=>{
    const date = new Date();
    const options = { month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleString('en-US', options);
    var time = new Date();
    var timeString = time.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
    const {name,email,subject,message}=req.body
    console.log(req.body);
    const msg={
        ...req.body,
        time:timeString,
        date:formattedDate
    }
    console.log(msg);
 Message.create(msg)
})
module.exports = router