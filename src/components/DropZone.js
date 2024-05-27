import { useDropzone } from "react-dropzone";
import { Myalter } from "./Myalter";

export const MyDropzone = ({ setDescriptionImgArray }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
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
          Myalter(
            null,
            null,
            `${file.name} 파일은 허용되지 않는 확장자입니다.`
          );
          return; // 다음 파일 처리 중단
        }
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setDescriptionImgArray((prev) => [...prev, reader.result]);
        };
      } else {
        return;
      }
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>여기에 이미지를 드래그 앤 드롭하세요.</p>
    </div>
  );
};
