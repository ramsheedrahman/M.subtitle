const express = require('express');
const sharp=require('sharp')
const router = express.Router();
const jwt = require("jsonwebtoken");
const Movies = require('../model/moviesschema')
const path=require('path');
const { log } = require('console');
const Message=require('../model/messageschema')


router.post('/addmovies',async(req,res)=>{
     image=req.files.image,
     filename=req.files.image.name,
     subtitle=req.files.subtitle
    const {name,year,review,language,genre}=req.body
    console.log(req.body)
   const movies = await Movies.create({
        name,year,review,language,genre})
        await sharp(image.data).resize(400,400).webp({quality:80}).toFile(path.join(__dirname,'images/'+movies._id+'.webp'))
      subtitle.mv(path.join(__dirname,'subtitle/'+movies._id+'.srt'))
        
        
        }
        )
        router.get('/image/:id',async(req,res)=>{
         const id=req.params.id
         Products=await Movies.find({_id:id})
       res.sendFile(path.join(__dirname,'images/'+id+'.webp'));
    })
     
    router.get('/subtitle/:id',async(req,res)=>{
      const id=req.params.id
      Products=await Movies.find({_id:id})
    res.sendFile(path.join(__dirname,'subtitle/'+id+'.srt'));
 })
 router.delete('/deletemovie/:id',async(req,res)=>{
  var id=req.params.id
  const Movies=await Movies.findByIdAndRemove(id)
})
 router.get('/getmovies',async(req,res)=>{
  const getMovies=await Movies.find()
  console.log(getMovies);
  return res.json(getMovies)
 })

 router.get('/editmovies/:id',async(req,res)=>{
    const id=req.params.id
   const Editmovies= await Movies.findById(id)
return res.json(Editmovies)
 })
 router.post('/editmovies/:id',async(req,res)=>{
  try {
    image=req.files.image,
    filename=req.files.image.name,
    subtitle=req.files.subtitle
   const {name,year,review,language,genre}=req.body
   const id=req.params.id
  const Oldmovies= await Movies.findById(id)
  console.log(Oldmovies);
   if(name){
     Oldmovies.movies=name
   }
   if(year){
     Oldmovies.movies=year
   }
   if(review){
     Oldmovies.movies=review
   }
   if(language){
     Oldmovies.movies=language
   }
   if(genre){
     Oldmovies.movies=genre
   }
   if(req.files.image){
     sharp(req.files.image.data).resize(400,400).webp({quality:80}).toFile(path.join(__dirname,'images/'+Oldmovies._id+'.webp'))
   }
   if(req.files.subitle){
     subtitle.mv(path.join(__dirname,'subtitle/'+Oldmovies._id+'.srt'))
   }
   Oldmovies.save()
  } catch (error) {
    console.log(error);
  }
 
 })

 router.get('/getmessages',async(req,res)=>{
    const Messages= await Message.find()
    return res.json(Messages)
 })
module.exports=router