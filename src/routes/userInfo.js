
import { Link } from "react-router-dom";
import "../css/userInfo.css";

export const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="profile-image" />
          <div className="user-select">
            <div className="user-buy-list">
              <Link to="#"className="text-wrapper">userBuyList</Link>
            </div>
            <div className="user-profile">
              <Link to="/userProfile" className="div">userProfile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
