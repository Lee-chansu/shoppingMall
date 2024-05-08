import { useRef, useState } from "react";

export const SubImagePreview = ({ newProduct, subImageId, setNewProduct }) => {
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
      />
      <img
        style={{
          display: newProduct.subImage1
            ? "block"
            : !subImageFile
            ? "none"
            : "block",
        }}
        className="previewImg subImage"
        src={subImageFile}
        alt="상품 이미지"
      />
    </>
  );
};
