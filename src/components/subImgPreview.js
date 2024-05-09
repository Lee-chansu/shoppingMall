import { useRef, useState } from "react";

export const SubImagePreview = ({ newProduct, subImageId, setNewProduct }) => {
  const [subImageFile, setSubImageFile] = useState("");
  let subImgRef = useRef();

  const previewImage = () => {
    const file = subImgRef.current.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      const extension = file.name.split(".").pop().toLowerCase();
      const allowedExtensions = ["jpg", "jpeg", "png", "svg"]; // 허용되는 확장자 목록

      if (!allowedExtensions.includes(extension)) {
        alert(`${file.name} 파일은 허용되지 않는 확장자입니다.`);
        subImgRef.value = subImageFile; // 파일 선택 취소
        return; // 다음 파일 처리 중단
      }
      reader.onloadend = () => {
        setSubImageFile(reader.result);
        if (subImageId === "subImage1") {
          if (file.name.includes("http://") || file.name.includes("https://")) {
            setNewProduct((prevState) => ({
              ...prevState,
              subImage1: file.name,
            }));
          } else {
            setNewProduct((prevState) => ({
              ...prevState,
              subImage1: "/img/" + file.name,
            }));
          }
        } else if (subImageId === "subImage2") {
          if (file.name.includes("http://") || file.name.includes("https://")) {
            setNewProduct((prevState) => ({
              ...prevState,
              subImage2: file.name,
            }));
          } else {
            setNewProduct((prevState) => ({
              ...prevState,
              subImage2: "/img/" + file.name,
            }));
          }
        } else if (subImageId === "subImage3") {
          if (file.name.includes("http://") || file.name.includes("https://")) {
            setNewProduct((prevState) => ({
              ...prevState,
              subImage3: file.name,
            }));
          } else {
            setNewProduct((prevState) => ({
              ...prevState,
              subImage3: "/img/" + file.name,
            }));
          }
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
        ref={subImgRef}
        accept="image/*"
      />
      {newProduct && (
        <img
          style={{
            display: newProduct.subImage1
              ? "block"
              : subImageFile
              ? "block"
              : "none",
          }}
          className="previewImg subImage"
          src={newProduct ? newProduct : subImageFile}
          alt="상품 이미지"
        />
      )}
    </>
  );
};
