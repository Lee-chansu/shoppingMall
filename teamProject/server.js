// 1. 모듈 - require
const express = require("express");
const app = express();

const mysql = require("mysql2");
const dbConfig = require("./db");
const db = mysql.createConnection(dbConfig);

// 2. use, set - 등록
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(express.json()); // json 형태로 데이터 처리
app.use(express.urlencoded({ extended: true })); // queryString 형식의 데이터 처리

// 3. listen - 포트번호 지정
<<<<<<< HEAD
app.listen(3000, () => {
  console.log("접속 성공! - http://localhost3000 ");
});
=======
app.listen(3000, ()=>{
  console.log('접속 성공! - http://localhost8080 ')
})

>>>>>>> 3fbf689fcdee3e54c820793f55a464ca549158e8

// 4. 하위페이지들 - 라우팅
app.get("/", (req, res) => {
  res.send("메인 접속성공!");
});

<<<<<<< HEAD

=======
>>>>>>> 3fbf689fcdee3e54c820793f55a464ca549158e8
