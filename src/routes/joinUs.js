
import "../css/joinUs.css";

export const JoinUs = () => {
  return (
    <div className="join-us">
      <div className="join-box-wrapper">
        <div className="join-box">
          <div className="txt">이용약관</div>
          <div className="overlap-group">
            <div className="all-check">
              <input type="checkbox" className="rectangle" id="all"/>
              <label for="all" className="text-wrapper">전체동의</label>
              <div className="vector" />
            </div>
            <div className="check">
            <input type="checkbox" className="rectangle" id="firstCheck"/>
              <label for="firstCheck" className="div">개인정보 수집 동의 및 이용안내 (필수)</label>
              <div className="input" />
            </div>
          </div>
          <div className="check-2">
          <input type="checkbox" className="rectangle" id="secondCheck"/>
            <label for="secondCheck" className="div">마케팅 수신동의 (선택)</label>
            <div className="input" />
          </div>
          <button className="submit-button">동의하고 가입하기</button>
        </div>
      </div>
    </div>
  );
};
