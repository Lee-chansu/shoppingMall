import { useNavigate } from "react-router-dom";
import "../css/findPassword.css";

export const FindPassword = () => {
  const navigate = useNavigate()
  const goback = ()=>{
    navigate(-1)
  }
  return (
    <div className="findPassword">
      <div className="div">
        <div className="textWrapper">비밀번호 찾기</div>
        <form className="findPasswordBox">
          <div className="inputBox">
            <div className="inputUserid">
              <input className="textWrapper2" placeholder="사용자 아이디 입력"></input>
            </div>
            <div className="inputUserPhoneNumber">
              <input className="textWrapper3" placeholder="사용자 이메일 입력"></input>
            </div>
          </div>
          <div className="buttonBox">
            <button className="submitButton">제출</button>
            <button className="cancelButton" type="button" onClick={goback}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
};