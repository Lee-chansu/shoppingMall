import React from "react";

const ReviewAddImage = () => {
  return (
    <>
      <div className="addImgInput">
        <label for="input-file" className="upload">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-image"
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
          </svg>
            파일 첨부
        </label>
        <input type="file" id="input-file" style={{ display: "none" }} />
        <p className="subTitle">
          첨부파일은 최대 3장, 30MB까지만 등록 가능합니다.
        </p>
      </div>
    </>
  );
};

export default ReviewAddImage;
