import { useNavigate } from "react-router-dom";
import "../css/detail.css";

export const Detail = ({ category, detailArray }) => {
  const navigate = useNavigate();

  const detailButton = (e) => {
    const { innerText } = e.target;
    navigate(`/productList?category=${category}&detail=${innerText}`);
  };

  return (
    <div className=" detail">
      <div
        className="detail inner"
        style={!category || category === "악세사리" ? { display: "none" } : { display: "flex" }}
      >
        {detailArray.map((detail, index) => {
          return (
            <div className="wrapper" key={index}>
              <button className="text" onClick={detailButton}>
                {detail}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
