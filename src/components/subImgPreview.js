import { useState } from "react";
import { Myalter } from "./Myalter";
import Swal from "sweetalert2";

export const SubImagePreview = ({ newProduct, subImageId, setNewProduct }) => {
  const [subImageFile, setSubImageFile] = useState("");

  const subIamgeArray = {
    subImage1: newProduct.subImage1,
    subImage2: newProduct.subImage2,
    subImage3: newProduct.subImage3,
  }[subImageId];

  const previewImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      const extension = file.name.split(".").pop().toLowerCase();
      const allowedExtensions = [
        "jpg",
        "png",
        "bmp",
        "gif",
        "tif",
        "webp",
        "heic",
        "pdf",
      ]; // 허용되는 확장자 목록

      if (!allowedExtensions.includes(extension)) {
        Swal.fire({
          icon: "error",
          title: "이미지를 업로드하는데 실패했습니다.",
          text: `${file.name} 파일은 허용되지 않는 확장자입니다.`,
          showConfirmButton: true,
          confirmButtonText: "확인",
          confirmButtonColor: "#007bff",
        });
        e.target.value = subImageFile; // 파일 선택 취소
        return; // 다음 파일 처리 중단
      }
      reader.onloadend = () => {
        setSubImageFile(reader.result);
        if (subImageId === "subImage1") {
          setNewProduct((prevState) => ({
            ...prevState,
            subImage1: reader.result,
          }));
        } else if (subImageId === "subImage2") {
          setNewProduct((prevState) => ({
            ...prevState,
            subImage2: reader.result,
          }));
        } else if (subImageId === "subImage3") {
          setNewProduct((prevState) => ({
            ...prevState,
            subImage3: reader.result,
          }));
        }
      };
      reader.readAsDataURL(file);
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
