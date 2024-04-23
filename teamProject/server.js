
// 모듈
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

//db
const db = require("./models")
const {User,Product, ReviewList} = db

//미들웨어
app.use(cors())
app.use(express.json())
// app.use(express.static(path.join(__dirname,'../build')))
app.use(express.urlencoded({extended : true}))


//api
app.listen(5000,()=>{
  console.log('접속성공 - http://localhost:5000')
})

app.get('/',async(req,res)=>{
  const result = await ReviewList.findAll()
  res.json(result)
  console.log(result)
})