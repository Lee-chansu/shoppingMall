import { useNavigate } from "react-router-dom";
import "../css/userEdit.css";

export const UserEdit = () => {
  const navigate = useNavigate()
  const goback = ()=>{
    navigate(-1)
  }
  return (
    <div className="userEdit">
      <div className="div">
        <div className="profileImage" />
        <div className="userEditBox">
          <div className="boxPassword">
            <label htmlFor="password" className="txt">변경할 비밀번호</label>
            <input id="password"  type="password" className="input" />
          </div>
          <div className="boxPasswordCheck">
            <label htmlFor="passwordCheck" className="txt">비밀번호 재확인</label>
            <input id="passwordCheck"  type="password" className="input" />
          </div>
          <div className="boxEmail">
            <label htmlFor="email" className="txt">이메일을 입력해주세요</label>
            <input id="email"  type="email" className="input" />
          </div>
          <div className="boxPhone">
            <label htmlFor="phone" className="txt">전화번호를 입력해주세요</label>
            <input id="phone" className="input" />
          </div>
          <div className="boxAddress">
            <label htmlFor="address" className="txt">주소를 입력해주세요</label>
            <input id="address" className="input" />
          </div>
          <div className="selectGender">
            <div className="txt">성별을 선택해주세요</div>
            <div className="inputRadio">
              <label htmlFor="male" className="textWrapper2">남</label>
              <input type="radio" name="gender" className="radioMale" />
              <label htmlFor="female" className="textWrapper">여</label>
              <input type="radio" name="gender" className="radioFemale" />
            </div>
          </div>
          <div className="editForm">
            <button className="submitButton">제출</button>
            <button type="button" onClick={goback} className="cancelButton">취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};