import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/review.css";

//컴포넌트
import ButtonBox from "../components/ButtonBox";
import CustomButton from "../components/CustomButton";
import ReviewAddImage from "../components/ReviewAddImage";
import Star from "../components/Star";
import { Myalter } from "../components/Myalter";
import { jwtDecode } from "jwt-decode";

export const Review = () => {

  useEffect(()=>{// 유저 고유 id 받아오기
    const token = sessionStorage.getItem("token")
    if(!token){
      navigate('/');
    } else {
      const decodeToken = jwtDecode(token)
      setAddReview((pre)=>({...pre, user_id : decodeToken.id}))
    }
  },[])
  

  const location = useLocation();
  const {buyList} = location.state // 상품 구매id 받아오기
  

  const navigate = useNavigate();
  
  const [addReview, setAddReview] = useState({
    user_id : '',
    buyList_id : buyList.id,
    starPoint : 0,
    reviewColor : 0,
    reviewSize : 0,
    textArea : '',
    reviewImage : ''
  })
  
  const colorList = ["밝아요", "화면과 같아요", "어두워요"];
  const sizeList = ["작아요", "정사이즈예요", "커요"];
  const startList = [1,2,3,4,5] // map 돌리기위한 배열갯수

  const handleClick = (i)=>()=>{ // 별점클릭시
    setAddReview((pre)=>({...pre, starPoint : i+1}))
  }
  
  const handleChange = (e) => {
    setAddReview((pre)=>({
      ...pre,
      textArea : e.target.value
    })); //사용자 내용 입력시마다 state update
  };
  
  const handleLinkBackMove = () => {
    navigate(-1);
  };

  const handleLinkReviewMove = async(e) => {
    e.preventDefault()
    if(addReview.starPoint === 0){
      Myalter('warning', '리뷰 가이드', '별점을 선택해주세요')
    }
    else{
      console.log(addReview)
      try {
        const response = await fetch(`http://localhost:5000/review`,{
          method : "POST",
          headers : {"Content-Type":"application/json"},
          body : JSON.stringify({addReview})
        })
        if(!response.ok){
          throw new Error("서버에서 응답을 받을 수 없습니다")
        }else{
          await Myalter('success','리뷰 가이드','리뷰작성 완료')
        }

      } catch (error) {
        Myalter('warning', '리뷰 가이드', '리뷰 등록중 오류가 발생했습니다')
      }
    }
    
    // navigate("/"); //리뷰등록하기 페이지 설정
  };
  console.log(buyList)
  return (
    <div className="review">
      <div className="reviewWrap">
        <div className="reviewTitle">리뷰 작성하기</div>
        <div className="productBox">
          <img className="productImg"></img>
          <div className="nameOptionBox">
            <div className="productName">{buyList.productName}</div>
            <div className="productOption">{buyList.productColor} ,{buyList.productSize}</div>
          </div>
        </div>

        <div className="reviewCheckBox">
          <span className="title">구매하신 상품의 만족도를 체크해주세요 <big>*</big></span>
          <div className="starBox">
            <div className="star">
              {
                startList.map((e,i)=>{
                  
                  return(
                    <Star key={i} i = {i} size={50} color="gold" filled={i < addReview.starPoint? true : false} handleClick = {handleClick(i)} />
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="reviewColorBox">
          <span className="title">색상은 어떤가요 <big>*</big></span>
          <br />
          {colorList.map((val, idx) => {
            return (
              <>
                <div className="selectButton">
                  <CustomButton
                    key={idx}
                    buttonTitle={val}
                    className={addReview.reviewColor == idx ? "selected" : "non-selected"}
                    handleLinkMove={() => {
                      setAddReview((pre)=>({...pre, reviewColor : idx}));
                    }}
                  />
                </div>
              </>
            );
          })}
        </div>

        <div className="reviewSizeBox">
          <span className="title">사이즈는 어떤가요? <big>*</big>
          </span>
          <br />
          {sizeList.map((val, idx) => {
            return (
              <>
                <div className="selectButton">
                  <CustomButton
                    key={idx}
                    buttonTitle={val}
                    className={addReview.reviewSize == idx ? "selected" : "non-selected"}
                    handleLinkMove={() => {
                      setAddReview((pre)=>({...pre,reviewSize : idx}));
                    }}
                  />
                </div>
              </>
            );
          })}
        </div>

        <div className="reviewDetailBox">
          <span className="title">자세한 리뷰를 작성해 주세요</span>
          <div className="overlap-2">
            <textarea
              className="reviewDetail"
              placeholder="다른 분들에게 도움이 될 수 있는 리뷰를 300자 이내로 작성해 주세요"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="reviewAddImage">
          <span className="title">사진 첨부하기 </span>
          <ReviewAddImage />
        </div>

        <ButtonBox>
          <CustomButton
            className="btn1"
            buttonTitle="취소"
            handleLinkMove={handleLinkBackMove}
          />
          <CustomButton
            className="btn1"
            buttonTitle="리뷰 등록하기"
            handleLinkMove={handleLinkReviewMove}
          />
        </ButtonBox>
      </div>
    </div>
  );
};
