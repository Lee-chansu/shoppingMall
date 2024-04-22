

import { Link } from "react-router-dom";
import "../css/userProfile.css";

export const UserProfile = () => {
  return (
    <div className="userProfile">
      <div className="overlapGroupWrapper">
        <div className="overlapGroup">
          <div className="profileImage" />
          <div className="userEditBox">
            <div className="boxId">
              <div className="divWrapper">
                <div className="textWrapper">userId</div>
              </div>
            </div>
            <div className="boxUsername">
              <div className="divWrapper">
                <div className="textWrapper">username</div>
              </div>
            </div>
            <div className="boxEmail">
              <div className="divWrapper">
                <div className="textWrapper">email</div>
              </div>
            </div>
            <div className="boxPhone">
              <div className="divWrapper">
                <div className="phoneNum">userPhoneNum</div>
              </div>
            </div>
            <div className="boxAddress">
              <div className="divWrapper">
                <div className="textWrapper2">address</div>
              </div>
            </div>
            <div className="boxGender">
              <div className="divWrapper">
                <div className="textWrapper2">gender</div>
              </div>
            </div>
            <div className="editForm">
              <Link to="/passwordCheck" className="toSubmitButton">수정하기</Link>
              <Link to="/" className="cancelButton">돌아가기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};