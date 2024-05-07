import { useRef, useState } from "react";

export const SubImagePreview = ({ subImageId, setNewProduct }) => {
  const [subImageFile, setSubImageFile] = useState("");
  let subImgRef = useRef();

  const previewImage = () => {
    const file = subImgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
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
            subImage1: "../img/" + file.name,
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
            subImage2: "../img/" + file.name,
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
            subImage3: "../img/" + file.name,
          }));
        }
      }
    };
  };

  return (
    <>
      <label for={subImageId}>
        <div
          className="addImg"
          style={subImageId === "subImage1" ? { "margin-left": "5px" } : {}}
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
      />
      <img
        style={!subImageFile ? { display: "none" } : { display: "block" }}
        className="previewImg subImage"
        src={subImageFile}
        alt="상품 이미지"
      />
    </>
  );
};
