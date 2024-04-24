// 1. 모듈 - require
const express = require("express");
const app = express();
<<<<<<< HEAD
const cors = require('cors');
=======
>>>>>>> master

const mysql = require("mysql2");
const dbConfig = require("./db");
const db = mysql.createConnection(dbConfig);

// 2. use, set - 등록
app.use(express.static(__dirname + "/public"));
<<<<<<< HEAD
app.use(cors())
=======
>>>>>>> master

app.use(express.json()); // json 형태로 데이터 처리
app.use(express.urlencoded({ extended: true })); // queryString 형식의 데이터 처리

// 3. listen - 포트번호 지정
<<<<<<< HEAD
app.listen(3000, () => {
  console.log("접속 성공! - http://localhost3000 ");
=======
app.listen(5000, () => {
  console.log("접속 성공! - http://localhost5000 ");
>>>>>>> master
});

// 4. 하위페이지들 - 라우팅
app.get("/", (req, res) => {
<<<<<<< HEAD
  
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '/react-project/build/index.html'))
})
=======
  res.send("메인 접속성공!");
});
>>>>>>> master
