
import "../css/join.css";

export const Join = () => {
  return (
    <div className="join">
      <div className="join-box-wrapper">
        <div className="join-box">
          <div className="text-wrapper">회원가입</div>
          <div className="box-id">
            <label for="id" className="txt">Id를 입력해주세요</label>
            <input className="input" id="id" type="email"/>
          </div>
          <div className="box-password">
            <label for="password" className="txt">비밀번호를 입력해주세요</label>
            <input className="input" id="password" type="password"/>
          </div>
          <div className="box-password-check">
            <label for="passwordCheck" className="txt">비밀번호 재확인</label>
            <input className="input" id="passwordCheck" type="password"/>
          </div>
          <div className="box-email">
            <label for="email" className="txt">이메일을 입력해주세요</label>
            <input className="input" id="email" type="email"/>
          </div>
          <div className="box-phone">
            <label for="phone" className="txt">전화번호를 입력해주세요</label>
            <input className="input" id="phone"/>
          </div>
          <div className="box-address">
            <label for="address" className="txt">주소를 입력해주세요</label>
            <input className="input" id="address"/>
          </div>
          <div className="select-gender">
            <div className="txt">성별을 선택해주세요</div>
            <div className="input-radio">
              <label for="male" className="div">남</label>
              <input type="radio" name="gender" className="radio-male" id="male"/>
              <label for="female"className="text-wrapper-2">여</label>
              <input type="radio" name="gender" className="radio-female" id="female" />
            </div>
          </div>
          <div className="edit-form">
            <button className="submit-button">제출</button>
            <button className="cancle-button" type="reset">취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};
