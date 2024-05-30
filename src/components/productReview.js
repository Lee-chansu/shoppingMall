import React, { useEffect, useState } from "react";
import "../css/productReview.css";
import { Link, useNavigate } from "react-router-dom";

export const ProductReview = (props) => {
  const { switchBtn, setSwitchBtn, handleSwitchBtn, id, item } = props;
  const navigate = useNavigate()
  const [userList, setUserList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const starPoint = [0, 1, 2, 3, 4];

  useEffect(() => {
    // user 데이터 가져오기
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => setUserList(data));

    // reviewList 데이터 가져오기
    fetch(`http://localhost:5000/reviewList?buyList_id=${item}`)
      .then((response) => response.json())
      .then((data) => setReviewList(data));
  }, []);
  console.log(reviewList)
  return (
    <div className="productInfoReview">
      <div className="productInfoWrapper">
        <div className="productInfo">
          {/* <div className="infoSelect"> */}
          <div className="productDescription" onClick={handleSwitchBtn}>
            <div className="textWrapper6">상품 상세</div>
          </div>
          <div className="productReview">
            <div className="textWrapper5">상품 리뷰</div>
          </div>
          {/* </div> */}
          <div className="reviewBox">
            <div className="reviewAddBtnForm">
              <Link to="/payBuyList" className="divWrapper">
                <div className="textWrapper4">리뷰 작성하기 / REVIEW ()</div>
              </Link>
            </div>
            {reviewList.map((el, i) => {
              const user = userList.find((user) => user.id === el.user_id);
              return (
                <div
                  className="reviewerInfoWrapper"
                  key={el.id}
                  style={{ top: `${183 + i * 382}px` }}
                >
                  <div className="reviewerInfo2">
                    <div className="overlap">
                      <div className="userName">{user.userName} 님의 리뷰</div>
                      {id === user.id ? (
                        <div className="editBtnForm">
                          <button className="reviewEditBtn"
                            onClick={()=>{navigate('/payBuyList')}}>
                            리뷰 수정하기
                          </button>
                        </div>
                      ) : null}
                    </div>
                    <div className="starRating">
                      {starPoint.map((notUsed, i) => {
                        return el.starPoint > i ? (
                          <img
                            className="star"
                            key={i}
                            src={process.env.PUBLIC_URL + "/img/fullStar.svg"}
                            alt="켜진별"
                            width={"100px"}
                            style={{ display: "inline" }}
                          />
                        ) : (
                          <img
                            className="star"
                            key={i}
                            src={process.env.PUBLIC_URL + "/img/emptyStar.svg"}
                            alt="꺼진별"
                            width={"100px"}
                            style={{ display: "inline" }}
                          />
                        );
                      })}
                    </div>
                    <span className="evaluation">별점 : {el.starPoint} / 
                    {el.starPoint === 1 ? "매우 별로에요":
                      el.starPoint === 2 ? "별로에요" :
                        el.starPoint === 3 ? "보통이에요" :
                          el.starPoint === 4 ? "만족해요" :
                            el.starPoint === 5 ? "매우 만족해요" : ""
                    }</span>
                    <div className="reviewCreatedAt">
                      {el.reviewDate.substring(0, 10)}
                    </div>
                    <div className="productColor">{
                      el.reviewColor===1?"밝아요":
                        el.reviewColor===2?"화면과 같아요":
                          el.reviewColor===3?"어두워요" : ""
                    } /</div>
                    <div className="productSize">{
                      el.reviewSize===1?"작아요":
                        el.reviewSize===2?"정사이즈에요":
                          el.reviewSize===3?"커요":""
                    }</div>
                    <div className="productDetail">{el.content}</div>
                    <img
                      className="reviewImage"
                      src={el.reviewImage}
                      alt="reviewImage"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
