import React, { useEffect, useState } from "react";
import "../css/productReview.css";
import { Link } from "react-router-dom";

export const ProductReview = (props) => {
  const { switchBtn, setSwitchBtn, handleSwitchBtn, id, item } = props;

  const [userList, setUserList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const starPoint = [0, 1, 2, 3, 4];

  useEffect(() => {
    // user 데이터 가져오기
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => setUserList(data));

    // reviewList 데이터 가져오기
    // fetch(`http://localhost:5000/reviewList?productOption_id=${item}`)
    //   .then((response) => response.json())
    //   .then((data) => setReviewList(data));

    // // starPoint 데이터 가져오기
    // fetch(`http://localhost:5000/reviewList?productOption_id=${item}`)
    //   .then((response) => response.json())
    //   .then((data) => setReviewList(data));
  }, []);

  return (
    <div className="productInfoReview">
      <div className="productInfoWrapper">
        <div className="productInfo">
          <div className="infoSelect">
            <div className="productDescription" onClick={handleSwitchBtn}>
              <div className="textWrapper6">상품 상세</div>
            </div>
            <div className="productReview">
              <div className="textWrapper5">상품 리뷰</div>
            </div>
          </div>
          <div className="reviewBox">
            <div className="reviewAddBtnForm">
              <Link to="/payBuyList" className="divWrapper">
                <div className="textWrapper4">리뷰 작성하기</div>
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
                      <div className="textWrapper2">{user.userName}</div>
                      {id === user.id ? (
                        <div className="editBtnForm">
                          <div className="overlapGroup">
                            <div className="textWrapper3">리뷰 수정하기</div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="starRating">
                      {starPoint.map((element, i) => {
                        return el.starPoint > i ? (
                          <img
                            key={i}
                            src={process.env.PUBLIC_URL + "/img/fullStar.svg"}
                            alt="켜진별"
                            width={"50px"}
                          />
                        ) : (
                          <img
                            key={i}
                            src={process.env.PUBLIC_URL + "/img/emptyStar.svg"}
                            alt="꺼진별"
                            width={"50px"}
                          />
                        );
                      })}
                    </div>
                    <div className="reviewCreatedAt">
                      {el.reviewDate.substring(0, 10)}
                    </div>
                    <div className="productcolorSize">productColor</div>
                    <div className="textWrapper">size</div>
                    <div className="detail">{el.content}</div>
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
