import { useLocation, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/toss.css";

export function FailPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get("code");
  const message = params.get("message");

  return (
    <div className="result wrapper">
      <div className="box_section">
        <h2 style={{ padding: "20px 0px 10px 0px" }}>
          <img
            width="30px"
            src="https://static.toss.im/3d-emojis/u1F6A8-apng.png"
          />
          결제 실패
        </h2>
        <p>{`에러 코드: ${code}`}</p>
        <p>{`실패 사유: ${message}`}</p>
      </div>
    </div>
  );
}
