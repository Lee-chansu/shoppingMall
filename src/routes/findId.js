
import "../css/findId.css";

export const FindId = () => {
  return (
    <div className="find-id">
      <div className="div">
        <div className="text-wrapper">아이디 찾기</div>
        <form className="find-user-id-box">
          <div className="input-box">
            <div className="input-username">
              <input type = "text"  placeholder = " 사용자 이름 입력" className="text-wrapper-2"></input>
            </div>
            <div className="input-userphonenum">
            <input type = "email"  placeholder = " 사용자 이메일 입력" className="text-wrapper-2"></input>
            </div>
          </div>
          <div className="button-box">
            <button className="submit-button">제출</button>
            <button className="cancle-button" type="reset">취소</button>
          </div>
        </form>
      </div>
    </div>
  );
};
