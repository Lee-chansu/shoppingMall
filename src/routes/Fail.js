import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "../css/toss.css";
import ButtonBox from "../components/ButtonBox";
import CustomButton from "../components/CustomButton";

export function FailPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get("code");
  const message = params.get("message");
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleProductList = () => {
    navigate("/productList");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className="result wrapper">
      <div className="box_section">
        <h2 style={{ padding: "20px 0px 10px 0px" }}>
          <img
            width="30px"
            src="https://static.toss.im/3d-emojis/u1F6A8-apng.png"
            alt="결제실패 이미지"
          />
          결제 실패
        </h2>
        <p>{`에러 코드: ${code}`}</p>
        <p>{`실패 사유: ${message}`}</p>
        <ButtonBox className="tossBtn">
          <CustomButton
            className="btn1"
            buttonTitle="홈으로"
            handleLinkMove={handleHome}
          />

          <CustomButton
            className="btn2"
            buttonTitle="쇼핑 계속하기"
            handleLinkMove={handleProductList}
          />

          <CustomButton
            className="btn3"
            buttonTitle="장바구니로"
            handleLinkMove={handleCart}
          />
        </ButtonBox>
      </div>
    </div>
  );
}
