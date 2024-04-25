/* eslint-disable no-undef */
// 모듈
const express = require("express");
const cors = require("cors");
const app = express();

const session = require("express-session");
const passport = require("passport");
const MySQLStore = require("express-mysql-session")(session);
const LocalStrategy = require("passport-local");

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
const { User, Product } = db;

//미들웨어
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(session(sessionOption));
app.use(passport.session());

//api
app.listen(5000, () => {
  console.log("접속성공 - http://localhost:5000");
});

// 회원가입
app.post("/join", async (req, res) => {
  const newUser = req.body;
  const { userId } = req.body;
  const result = await User.findOne({ where: { userId } });
  if (!result) {
    await User.create(newUser);
    res.json({ result: false });
  } else {
    res.json({ result });
  }
});

// 로그인검증
passport.use(
  new LocalStrategy(async (userId, password, done) => {
    let result = await User.findOne({ where: { userId } });

    if (!result) {
      return done(null, false, { message: "아이디 불일치" });
    }
    if (result.password != password) {
      return done(null, false, { message: "비번 불일치" });
    } else {
      return done(null, result);
    }
  })
);

// 세션생성
passport.serializeUser((user, done) => {
  process.nextTick(() => {
    console.log("serializeUser");
    done(null, { id: user.id, userId: user.userId });
  });
});

// 세션검사
passport.deserializeUser(async (user, done) => {
  let result = await User.findOne({ where: { id: user.id } });

  if (result) {
    const loginUserInfo = {
      id: result.id,
      userId: result.userId,
    };
    process.nextTick(() => {
      return done(null, loginUserInfo);
    });
  }
});

// 로그아웃
app.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

// 로그인
app.post("/login", (req, res) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) return res.status(500).json(error);
    if (!user) return res.status(500).send(info.message);

    req.logIn(user, (err) => {
      if (err) return next(err);

      res.json(user);
    });
  })(req, res);
});

// 메인화면
app.get("/", async (req, res) => {
  const result = await Product.findAll();
  res.json(result);
});
