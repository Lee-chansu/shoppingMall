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
