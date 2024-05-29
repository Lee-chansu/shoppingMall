/* eslint-disable no-undef */
// 모듈
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");
passportConfig();
const MySQLStore = require("express-mysql-session")(session);

const dbOption = {
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "1234",
  database: "teamproject1",
};

const sessionOption = {
  secret: "1234",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 1000 },
  store: new MySQLStore(dbOption),
};

//db
const db = require("./models");
const { Product } = db;

//미들웨어
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(passport.initialize());
app.use(session(sessionOption));
app.use(passport.session());

//api
app.listen(process.env.PORT, () => {
  console.log(`접속성공 - http://localhost:` + process.env.PORT);
});

app.use("/", require("./router"));

// 메인화면
app.get("/", async (req, res) => {
  const { order } = req.query;
  let limit = parseInt(req.query.limit);
  let result;
  if (!order) {
    result = await Product.findAll({
      limit,
    });
  } else {
    result = await Product.findAll({
      order: [[order, "desc"]],
      limit,
    });
  }
  res.json(result);
});
