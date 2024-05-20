import { useRef, useState } from "react";

export const SubImagePreview = ({ newProduct, subImageId, setNewProduct }) => {
  const [subImageFile, setSubImageFile] = useState("");

  const subIamgeArray = {
    subImage1: subImageFile,
    subImage2: subImageFile,
    subImage3: subImageFile,
  }[subImageId];

  const previewImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      const extension = file.name.split(".").pop().toLowerCase();
      const allowedExtensions = ["jpg", "jpeg", "png", "svg"]; // 허용되는 확장자 목록

      if (!allowedExtensions.includes(extension)) {
        alert(`${file.name} 파일은 허용되지 않는 확장자입니다.`);
        e.target.value = subImageFile; // 파일 선택 취소
        return; // 다음 파일 처리 중단
      }
      reader.onloadend = () => {
        setSubImageFile(reader.result);
        if (subImageId === "subImage1") {
          setNewProduct((prevState) => ({
            ...prevState,
            subImage1: file,
          }));
        } else if (subImageId === "subImage2") {
          setNewProduct((prevState) => ({
            ...prevState,
            subImage2: file,
          }));
        } else if (subImageId === "subImage3") {
          setNewProduct((prevState) => ({
            ...prevState,
            subImage3: file,
          }));
        }
      };
    } else {
      return;
    }
  };

  return (
    <>
      <label htmlFor={subImageId}>
        <div
          className="addImg"
          style={subImageId === "subImage1" ? { marginLeft: "5px" } : {}}
        >
          +
        </div>
      </label>
      <input
        id={subImageId}
        type="file"
        name={subImageId}
        onChange={previewImage}
        accept="image/*"
      />
      {subIamgeArray && (
        <img
          style={{
            display: subIamgeArray ? "block" : subImageFile ? "block" : "none",
          }}
          className="previewImg subImage"
          src={subIamgeArray ? subIamgeArray : subImageFile}
          alt="상품 이미지"
        />
      )}
    </>
  );
};
