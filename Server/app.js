const express=require('express')
const app=express()
const cors=require('cors')
var path = require('path');
var fileUpload=require('express-fileupload');
const userRouter=require('./Routes/User')
const adminRouter=require('./Routes/Admin')
const db=require('./Configure/Connection')
app.use(cors())
app.use(express.json())
const { connection } = require('mongoose')
const { json } = require('body-parser')
app.use(fileUpload());
app.use('/admin',adminRouter)
app.use('/',userRouter)
app.set('views', path.join(__dirname, 'views'));
db.connection()
app.listen(8000,()=>{
    console.log('server conncted');
})