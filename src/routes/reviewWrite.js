import "../css/reviewWrite.css";

export const ReviewWrite = ()=>{
  
  return(
    <>
      <div className="inner">
        <div className="header">리뷰</div>
        <div className="inputBox">
          <label for="score">별점</label>
          <input id="score"></input>
          <label for="text">리뷰입력해</label>
          <input type="text" id="text"></input>
        </div>
      </div>
    </>
  )
}