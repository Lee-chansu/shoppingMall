
import "../css/passwordCheck.css";

export const PasswordCheck = () => {
  return (
    <div className="password-check">
      <div className="div">
        <div className="text-wrapper">비밀번호 확인</div>
        <form className="login-box">
          <div className="inpurt-box">
            <div className="input-userpassword">
              <input type="password" className="text-wrapper-4" placeholder="사용자 비밀번호 입력"></input>
            </div>
            <div className="div-wrapper">
            <input type="password" className="text-wrapper-4" placeholder="사용자 비밀번호 재입력"></input>
            </div>
          </div>
          <div className="button-box">
            <button className="submit-button">제출</button>
            <button className="cancle-button">취소</button>
          </div>
        </form>
      </div>
    </div>
  );
};
