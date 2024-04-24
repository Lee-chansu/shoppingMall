
import { Link } from "react-router-dom";
import "../css/userInfo.css";

export const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="overlapGroupWrapper">
        <div className="overlapGroup">
          <div className="profileImage" />
          <div className="userSelect">
            <div className="userBuyList">
              <Link to="#" className="textWrapper">payBuyList</Link>
            </div>
            <div className="userProfile">
              <Link to="/userProfile" className="div">userProfile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};