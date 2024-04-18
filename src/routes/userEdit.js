import "../css/userEdit.css";

export const UserEdit = () => {
    return (
      <div className="user-edit">
        <div className="div">
          <div className="profile-image" />
          <div className="user-edit-box">
            <div className="box-password">
              <div className="input" />
              <div className="txt">변경할 비밀번호</div>
            </div>
            <div className="box-password-check">
              <div className="input" />
              <div className="txt">비밀번호 재확인</div>
            </div>
            <div className="box-email">
              <div className="input" />
              <div className="txt">email을 입력해주세요</div>
            </div>
            <div className="box-phone">
              <div className="input" />
              <div className="txt">전화번호를 입력해주세요</div>
            </div>
            <div className="box-address">
              <div className="input" />
              <div className="txt">주소를 입력해주세요</div>
            </div>
            <div className="select-gender">
              <div className="input-radio">
                <div className="text-wrapper">여</div>
                <div className="text-wrapper-2">남</div>
                <div className="radio-female" />
                <div className="radio-male" />
              </div>
              <div className="txt">성별을 선택해주세요</div>
            </div>
            <div className="edit-form">
              <div className="submit-button">
                <div className="text-wrapper-3">수정완료</div>
              </div>
              <div className="cancle-button">
                <div className="text-wrapper-4">취소</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };