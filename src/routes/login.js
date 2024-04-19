import { Link } from "react-router-dom";
import "../css/login.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div">
        <div className="text-wrapper">로그인</div>
        <form className="login-box">
          <div className="login-form">
            <div className="input-userid">
              <input className="text-wrapper-2" type="email" placeholder="사용자 이메일 입력"/>
            </div>
            <div className="input-userpassword">
              <input className="text-wrapper-2" placeholder="사용자 비밀번호 입력" type="password"></input>
            </div>
          </div>
          <div className="login-button">
            <button className="submit-button">제출</button>
              <button type="reset" className="cancel-button">취소</button>
          </div>
          <div className="etc">
            <Link to="/findId" className="text-wrapper-5">아이디찾기</Link>
            <Link to="/findPassword" className="text-wrapper-6">비밀번호찾기</Link>
            <Link to="/join" className="text-wrapper-7">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
