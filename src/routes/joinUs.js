import { useNavigate } from "react-router-dom";
import "../css/joinUs.css";

export const JoinUs = () => {
  const navigate = useNavigate()
  const goback = ()=>{
    navigate(-1)
  }

  return (
    <div className="joinUs">
      <div className="joinBoxWrapper">
        <div className="joinBox">
          <div className="txt">이용약관</div>
          <div className="overlapGroup">
            <div className="allCheck">
              <input type="checkbox" className="rectangle" id="all"/>
              <label htmlFor="all" className="textWrapper">전체동의</label>
              <div className="vector" />
            </div>
            <div className="check">
              <input type="checkbox" className="rectangle" id="firstCheck"/>
              <label htmlFor="firstCheck" className="div">개인정보 수집 동의 및 이용안내 (필수)</label>
              <div className="input" />
            </div>
          </div>
          <div className="check2">
            <input type="checkbox" className="rectangle" id="secondCheck"/>
            <label htmlFor="secondCheck" className="div">마케팅 수신동의 (선택)</label>
            <div className="input" />
          </div>
          <div className="button_box">
            <button className="submitButton">동의하고 가입하기</button>
            <button className="cancleButton" type="button" onClick={goback}>취소</button>
          </div>
          

        </div>
      </div>
    </div>
  );
};