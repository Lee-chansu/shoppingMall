// 모듈
const express = require('express')
const cors = require('cors')
const app = express()

//db
const db = require("./models")
const {User,Product} = db

//미들웨어
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//api
app.listen(5000,()=>{
  console.log('접속성공 - http://localhost:5000')
})

// 회원가입
app.post('/join',async(req,res)=>{
  
})


app.get('/',async(req,res)=>{
  const result = await Product.findAll()
  res.json(result)
})