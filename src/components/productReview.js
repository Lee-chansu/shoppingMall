import React, { useEffect, useState } from "react";
import "../css/productReview.css";
import { Link } from "react-router-dom";

export const ProductReview = (props) => {
  const { switchBtn, setSwitchBtn, handleSwitchBtn, id } = props

  const [reviewList, setReviewList] = useState([]);
  const [userList, setUserList] = useState([]);

  const loadUser = async () => {
    const getUsers = await fetch(`http://localhost:5000/User`).then((res) =>
      res.json()
    );
    setUserList(getUsers);
  };

  const loadReview = async () => {
    const getReviews = await fetch(`http://localhost:5000/ReviewList?product_id=${id}`).then((res) =>
    // const getReviews = await fetch(`http://localhost:5000/ReviewList`).then((res) =>
      res.json()
    );
    setReviewList(getReviews);
  };

  const searchByUserId = (reviewList, userList) => {
    const updateReviewList = reviewList.map((review) => {
      const foundUser = userList.find((user) => user.id === review.user_id);
      if (foundUser) {
        return {...review, username: foundUser.username}
      }
      return review
    })
    return updateReviewList
  };

  useEffect(() => {
    loadUser()
    loadReview()
  },[])

  useEffect(() => {
    const updateReviewList = searchByUserId(reviewList, userList)
    setReviewList(updateReviewList)
  }, [userList])


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
              <Link to="/addReivew" className="divWrapper">
                <div className="textWrapper4">리뷰 작성하기</div>
              </Link>
            </div>
            {
              reviewList.map((el, i) => {
                return (
                  <div className="reviewerInfoWrapper" key={i} style={{top:`${183 + i * 382}px`}}>
                    <div className="reviewerInfo2">
                      <div className="overlap">
                        <div className="textWrapper2">username</div>
                        {true ? (<div className="editBtnForm">
                          <div className="overlapGroup">
                          <div className="textWrapper3">리뷰 수정하기</div>
                          </div>
                        </div>) : (null)}
                      </div>
                      <div className="starRating">⭐⭐⭐⭐⭐</div>
                      <div className="reviewCreatedAt">{el.reviewDate.substring(0, 10)}</div>
                      <div className="productcolorSize">productColor Size</div>
                      <div className="textWrapper">rating</div>
                      <div className="detail">{el.content}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};