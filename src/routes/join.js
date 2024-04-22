import { useNavigate } from "react-router-dom";
import "../css/join.css";

export const Join = () => {
  const navigate = useNavigate()
  const goback = ()=>{
    navigate(-1)
  }
  return (
    <div className="join">
      <div className="joinBoxWrapper">
        <div className="joinBox">
          <div className="textWrapper">회원가입</div>
          <div className="boxId">
            <label htmlFor="id" className="txt">Id를 입력해주세요</label>
            <input className="input" id="id" type="email"/>
          </div>
          <div className="boxPassword">
            <label htmlFor="password" className="txt">비밀번호를 입력해주세요</label>
            <input className="input" id="password" type="password"/>
          </div>
          <div className="boxPasswordCheck">
            <label htmlFor="passwordCheck" className="txt">비밀번호 재확인</label>
            <input className="input" id="passwordCheck" type="password"/>
          </div>
          <div className="boxEmail">
            <label htmlFor="email" className="txt">이메일을 입력해주세요</label>
            <input className="input" id="email" type="email"/>
          </div>
          <div className="boxPhone">
            <label htmlFor="phone" className="txt">전화번호를 입력해주세요</label>
            <input className="input" id="phone"/>
          </div>
          <div className="boxAddress">
            <label htmlFor="address" className="txt">주소를 입력해주세요</label>
            <input className="input" id="address"/>
          </div>
          <div className="selectGender">
            <div className="txt">성별을 선택해주세요</div>
            <div className="inputRadio">
              <label htmlFor="male" className="div">남</label>
              <input type="radio" name="gender" className="radioMale" id="male"/>
              <label htmlFor="female" className="textWrapper2">여</label>
              <input type="radio" name="gender" className="radioFemale" id="female" />
            </div>
          </div>
          <div className="editForm">
            <button className="submitButton">제출</button>
            <button className="cancelButton" type="button" onClick={goback}>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};