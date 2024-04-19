import { useNavigate } from "react-router-dom";
import "../css/findId.css";

export const FindId = () => {
  const navigate = useNavigate()
  const goback = () => {
    navigate(-1)
  }
  return (
    <div className="findId">
      <div className="div">
        <div className="textWrapper">아이디 찾기</div>
        <form className="findUserIdBox">
          <div className="inputBox">
            <div className="inputUsername">
              <input type="text" placeholder=" 사용자 이름 입력" className="textWrapper2"></input>
            </div>
            <div className="inputUserPhoneNumber">
              <input type="email" placeholder=" 사용자 이메일 입력" className="textWrapper2"></input>
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
