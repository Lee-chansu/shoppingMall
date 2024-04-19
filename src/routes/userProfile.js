

import { Link } from "react-router-dom";
import "../css/userProfile.css";

export const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="profile-image" />
          <div className="user-edit-box">
            <div className="box-id">
              <div className="div-wrapper">
                <div className="text-wrapper">userId</div>
              </div>
            </div>
            <div className="box-username">
              <div className="div-wrapper">
                <div className="text-wrapper">username</div>
              </div>
            </div>
            <div className="box-email">
              <div className="div-wrapper">
                <div className="text-wrapper">email</div>
              </div>
            </div>
            <div className="box-phone">
              <div className="div-wrapper">
                <div className="phone-num">userPhoneNum</div>
              </div>
            </div>
            <div className="box-address">
              <div className="div-wrapper">
                <div className="text-wrapper-2">address</div>
              </div>
            </div>
            <div className="box-gender">
              <div className="div-wrapper">
                <div className="text-wrapper-2">gender</div>
              </div>
            </div>
            <div className="edit-form">
              <Link to="/passwordCheck" className="to-submit-button">수정하기</Link>
              <Link to="/" className="cancle-button">돌아가기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
