import { useDropzone } from "react-dropzone";
import { Myalter } from "./Myalter";
import Swal from "sweetalert2";

export const MyDropzone = ({ setDescriptionImgArray }) => {
  const { getRootProps, getInputProps } = useDropzone({
    acceptedMimeTypes: [
      "jpg",
      "png",
      "bmp",
      "gif",
      "tif",
      "webp",
      "heic",
      "pdf",
    ],
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
          Swal.fire({
            icon: "error",
            title: "이미지를 업로드하는데 실패했습니다.",
            text: `${file.name} 파일은 허용되지 않는 확장자입니다.`,
            showConfirmButton: true,
            confirmButtonText: "확인",
            confirmButtonColor: "#007bff",
          });
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
    <div {...getRootProps()} className="preview">
      <input {...getInputProps()} />
      <p>여기에 이미지를 드래그 앤 드롭하세요.</p>
    </div>
  );
};
