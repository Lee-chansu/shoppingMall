import "../css/userEdit.css";

export const UserEdit = () => {
    return (
      <div className="user-edit">
        <div className="div">
          <div className="profile-image" />
          <div className="user-edit-box">
            <div className="box-password">
              <label for="password" className="txt">변경할 비밀번호</label>
              <input id="password"  type="password" className="input" />
            </div>
            <div className="box-password-check">
              <label for="passwordCheck" className="txt">비밀번호 재확인</label>
              <input id="passwordCheck"  type="password" className="input" />
            </div>
            <div className="box-email">
              <label for="email" className="txt">이메일을 입력해주세요</label>
              <input id="email"  type="email" className="input" />
            </div>
            <div className="box-phone">
              <label for="phone" className="txt">전화번호를 입력해주세요</label>
              <input id="phone" className="input" />
            </div>
            <div className="box-address">
              <label for="address" className="txt">주소를 입력해주세요</label>
              <input id="address" className="input" />
            </div>
            <div className="select-gender">
              <div className="txt">성별을 선택해주세요</div>
              <div className="input-radio">
                <label for="male" className="text-wrapper-2">남</label>
                <input type="radio" name="gender" className="radio-male" />
                <label for="female" className="text-wrapper">여</label>
                <input type="radio" name="gender" className="radio-female" />
              </div>
            </div>
            <div className="edit-form">
              <button className="submit-button">제출</button>
              <button type="reset" className="cancle-button">취소</button>
            </div>
          </div>
        </div>
      </div>
    );
  };