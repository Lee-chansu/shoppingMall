import { useRef, useState } from "react";

export const SubImagePreview = ({ index }) => {
  const [subImageFile, setSubImageFile] = useState("");
  let [subImageIdCount, setSubImageIdCount] = useState(0);
  let [subImageCount, setSubImageCount] = useState(0);
  const subImgRef = useRef();

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
      <label for="subImage">
        <div className="addImg">+</div>
      </label>
      <img
        style={!subImageFile ? { display: "none" } : { display: "block" }}
        className="previewImg main"
        src={subImageFile}
        alt="상품 이미지"
      />
      {Array.from({ length: subImageCount }).map((el, index) => {
        return (
          <input
            id="subImage"
            type="file"
            name="subImage"
            onChange={previewImage}
            ref={subImageFile}
          />
        );
      })}
    </>
  );
};
