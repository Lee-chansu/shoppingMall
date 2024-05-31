import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/productReview.css";

export const ProductReview = (props) => {
  const navigate = useNavigate();
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

  const handleNavigate = (reviewId) => {
    navigate(`http://localhost:5000/reviewEdit/${reviewId}`);
  };

  useEffect(() => {
    // user 데이터 가져오기
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => setUserList(data));

    // reviewList 데이터 가져오기
    fetch(
      //item = productId
      `http://localhost:5000/reviewList?buyList_id=${item}&offset=${offset}&limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.rows?.length > 0) {
          setReviewList(data.rows);
          setPagingSize(Math.ceil(data.count / limit));
        }
      });
  }, [offset]);

  return (
    <div className="productInfoReview">
      <div className="productInfoWrapper">
        <div className="productInfo">
          <div className="productDescription" onClick={handleSwitchBtn}>
            <div className="textWrapper4">상품 상세</div>
          </div>
          <div className="productReview">
            <div className="textWrapper3">상품 리뷰</div>
          </div>
        </div>
        <div className="reviewBox">
          <div className="reviewAddBtnForm">
            <Link to="/payBuyList" className="link">
              <button className="reviewAddBtn">
                리뷰 작성하기 / REVIEW ()
              </button>
            </Link>
          </div>
          {console.log(reviewList)}
          {reviewList.length !== 0 ? (
            reviewList.map((el, i) => {
              const user = userList.find((user) => user.id === el.user_id);
              return (
                <div className="reviewerInfoWrapper" key={el.id}>
                  <div className="reviewerInfo2">
                    <div className="overlap">
                      <div className="userName">{user.userName} 님의 리뷰</div>
                      {id === user.id ? (
                        <div className="editBtnForm">
                          <button
                            className="reviewEditBtn"
                            onClick={() => handleNavigate(el.id)}
                          >
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
                    <div className="productOption">
                      {el.reviewColor} / {el.reviewSize}
                    </div>
                    <div className="productDetail">{el.content}</div>
                  </div>
                  <div className="reviewImageBox">
                    <img
                      className="reviewImage"
                      src="https://asset.m-gs.kr/prod/93220173/1/550"
                      alt="reviewImage"
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
          <div className="paging">
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
