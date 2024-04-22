import { Link , useNavigate} from "react-router-dom";
import "../css/login.css";

export const Login = () => {
  const navigate = useNavigate()
  const goback = ()=>{
    navigate(-1)
  }

  return (
    <div className="login">
      <div className="div">
        <div className="textWrapper">로그인</div>
        <form className="loginBox">
          <div className="loginForm">
            <div className="inputUserid">
              <input className="textWrapper2" type="email" placeholder="사용자 이메일 입력"/>
            </div>
            <div className="inputUserpassword">
              <input className="textWrapper2" placeholder="사용자 비밀번호 입력" type="password"></input>
            </div>
          </div>
          <div className="loginButton">
            <button className="submitButton">제출</button>
            <button type="button" onClick = {goback}className="cancelButton">취소</button>
          </div>
          <div className="etc">
            <Link to="/findId" className="textWrapper5">아이디찾기</Link>
            <Link to="/findPassword" className="textWrapper6">비밀번호찾기</Link>
            <Link to="/join" className="textWrapper7">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
};