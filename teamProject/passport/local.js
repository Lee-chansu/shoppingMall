require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local");

const db = require("../models");
const { User } = db;

module.exports = () => {
  // 로그인검증
  passport.use(
    new LocalStrategy(async (userId, password, done) => {
      let result = await User.findOne({ where: { userId } });

      if (!result) {
        return done(null, false, { message: "이메일이 일치하지않습니다" });
      }
      if (result.password != password) {
        return done(null, false, { message: "비밀번호가 일치하지않습니다" });
      }
      if (result.isDeleted) {
        return done(null, false, { message: "휴면 계정입니다" });
      } else {
        return done(null, result);
      }
    })
  );
};
