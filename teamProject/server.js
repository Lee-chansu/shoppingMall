// 모듈
const express = require('express')
const cors = require('cors')
const app = express()

//db
const db = require("./models")
const {User} = db

//미들웨어
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//api
app.listen(3000,()=>{
  console.log('접속성공 - http://localhost:3000')
})
