import React, { useEffect, useState } from "react";
import "../css/productReview.css";
import { Link } from "react-router-dom";

export const ProductReview = (props) => {
  const { switchBtn, setSwitchBtn, handleSwitchBtn, id, item } = props

  const [userList, setUserList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    // user 데이터 가져오기
    fetch('http://localhost:5000/user')
      .then(response => response.json())
      .then(data => setUserList(data));

    // reviewList 데이터 가져오기
    fetch(`http://localhost:5000/reviewList?product_id=${item}`)
      .then(response => response.json())
      .then(data => setReviewList(data));

    
  }, []);

  // const loadUser = async () => {
  //   const getUsers = await fetch(`http://localhost:5000/User`).then((res) =>
  //     res.json()
  //   );
  //   setUserList(getUsers);
  // };

  // const loadReview = async () => {
  //   const getReviews = await fetch(`http://localhost:5000/ReviewList?product_id=${item}`).then((res) =>
  //   // const getReviews = await fetch(`http://localhost:5000/ReviewList`).then((res) =>
  //     res.json()
  //   );
  //   setReviewList(getReviews);
  // };

  // const searchByUserData = (reviewList, userList) => {
  //   const updateReviewList = reviewList.map((review, i) => {
  //     const foundUser = userList.find((user) => user.id === review.user_id);
  //     if (foundUser) {
  //       return {...review, username: foundUser.username}
  //     } else {
  //     }
  //     return review
  //   })
  //   return updateReviewList
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await loadUser();
  //     await loadReview();
  //   };
  //   fetchData();
  //   // console.log(reviewList)
  // },[])

  // useEffect(() => {
    
  //   setReviewList(updateReviewList)
  //   console.log(reviewList)
  // }, [userList])

  // useEffect(() => {
  //   setReviewList(updateReviewList)
  // }, [userList])

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
            
            {/* {reviewList.map((el, i) => {
              // user_id에 해당하는 A 테이블의 name 찾기
              const users = userList.find(user => user.id === el.user_id);

              // 해당 항목과 A 테이블의 name을 같이 출력
              return (
                <div key={el.id}>
                  <p>B 테이블의 값: {el.value}</p>
                  <p>A 테이블의 이름: {users.name}</p>
                </div>
              );
            })} */}
            {
              reviewList.map((el, i) => {
                  const user = userList.find(user => user.id === el.user_id);
                  return (
                  <div className="reviewerInfoWrapper" key={el.id} style={{top:`${183 + i * 382}px`}}>
                    <div className="reviewerInfo2">
                      <div className="overlap">
                        <div className="textWrapper2">{user.userName}</div>
                        {id === user.id ? (<div className="editBtnForm">
                          <div className="overlapGroup">
                          <div className="textWrapper3">리뷰 수정하기</div>
                          </div>
                        </div>) : null}
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