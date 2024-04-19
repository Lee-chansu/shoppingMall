
import "../css/findPassword.css";

export const FindPassword = () => {
  return (
    <div className="find-password">
      <div className="div">
        <div className="text-wrapper">비밀번호 찾기</div>
        <form className="find-password-box">
          <div className="input-box">
            <div className="input-userid">
              <input className="text-wrapper-2" placeholder="사용자 아이디 입력"></input>
            </div>
            <div className="input-userphonenum">
              <input className="text-wrapper-3" placeholder="사용자 이메일 입력"></input>
            </div>
          </div>
          <div className="botton-box">
            <button className="submit-button">제출</button>
            <button className="cancle-button" type="reset">취소</button>
          </div>
        </form>
      </div>
    </div>
  );
};
