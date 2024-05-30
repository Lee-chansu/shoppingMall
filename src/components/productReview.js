import React, { useEffect, useState } from "react";
import "../css/productReview.css";
import { Link } from "react-router-dom";

export const ProductReview = (props) => {
  const { handleSwitchBtn, id, item } = props;

  const [userList, setUserList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const starPoint = [0, 1, 2, 3, 4];
  const [pagingSize, setPagingSize] = useState(0);
  const [offset, setOffset] = useState(0);
  const limit = 5;

  const handleOffset = (index) => {
    if (index === 0) {
      setOffset(0);
    } else {
      setOffset(index * limit);
    }
  };

  useEffect(() => {
    // user 데이터 가져오기
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => setUserList(data));

    // reviewList 데이터 가져오기
    fetch(
      `http://localhost:5000/reviewList?buyList_id=${item}&offset=${offset}&limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        setReviewList(data);
        setPagingSize(Math.ceil(data.length / limit));
      });
  }, []);

  return (
    <div className="productInfoReview">
      <div className="productInfoWrapper">
        <div className="productInfo">
          <div className="productDescription" onClick={handleSwitchBtn}>
            <div className="textWrapper6">상품 상세</div>
          </div>
          <div className="productReview">
            <div className="textWrapper5">상품 리뷰</div>
          </div>
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
                          <button className="reviewEditBtn">
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
                    <span className="evaluation">별점 5.0 / 매우 만족해요</span>
                    <div className="reviewCreatedAt">
                      {el.reviewDate.substring(0, 10)}
                    </div>
                    <div className="productColor">{el.reviewColor}/</div>
                    <div className="productSize">{el.reviewSize}</div>
                    <div className="productDetail">{el.content}</div>
                    <img
                      className="reviewImage"
                      src="https://asset.m-gs.kr/prod/93220173/1/550"
                      alt="reviewImage"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex" }}>
            {Array.from({ length: pagingSize }, (el, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleOffset(index)}
                  style={{ padding: "0 20px", cursor: "pointer" }}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
