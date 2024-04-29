import { useRef, useState } from "react";

export const SubImagePreview = ({ subImageId , index }) => {
  const [subImageFile, setSubImageFile] = useState("");
  let subImgRef = useRef();

  const previewImage = () => {
    const file = subImgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSubImageFile(reader.result);
    };
  };

  return (
    <>
      <label for={subImageId}>
        <div className="addImg">+</div>
      </label>
      <input
        id={subImageId}
        type="file"
        name="subImage"
        onChange={previewImage}
        ref={subImgRef}
      />
      <img
        style={!subImageFile ? { display: "none" } : { display: "block" }}
        className="previewImg main"
        src={subImageFile}
        alt="상품 이미지"
      />
    </>
  );
};
