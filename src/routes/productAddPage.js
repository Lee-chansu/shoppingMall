import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/productAdd.css";
import { XCircleFill } from "react-bootstrap-icons";
import Swal from "sweetalert2";

//컴포넌트
import { Nav } from "../components/nav";
import { SubImagePreview } from "../components/subImgPreview";
import { ProductOption } from "../components/productOptionAdd";
import { MyDropzone } from "../components/DropZone";
import ButtonBox from "../components/ButtonBox";
import CustomButton from "../components/CustomButton";

export const ProductAdd = () => {
  const navigate = useNavigate();
  const handleCancle = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const category = ["아우터", "상의", "하의", "신발", "악세사리"];
  const [checkCategory, setCheckCategory] = useState("");
  const [count, setCount] = useState(1);

  const detail = {
    아우터: ["코트", "블레이저", "패딩", "자켓", "가디건"],
    상의: ["반팔", "긴팔", "티셔츠", "니트", "나시"],
    하의: ["청바지", "슬랙스", "카고바지", "반바지"],
    신발: ["샌들/슬리퍼", "운동화/단화", "구두/워커"],
    악세사리: ["양말", "가방", "피어싱", "헤어", "기타"],
  };

  const [detailBar, setDetailBar] = useState([]);
  const [checkDetail, setCheckDetail] = useState("");

  const [mainImageFile, setMainImageFile] = useState("");
  const mainImgRef = useRef();

  const subImageCount = [0, 1, 2];
  const subImageId = ["subImage1", "subImage2", "subImage3"];

  const previewMainImg = () => {
    const file = mainImgRef.current.files[0];
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
          categoryTitle: "이미지를 업로드하는데 실패했습니다.",
          text: `${file.name} 파일은 허용되지 않는 확장자입니다.`,
          showConfirmButton: true,
          confirmButtonText: "확인",
          confirmButtonColor: "#007bff",
        });
        mainImgRef.value = mainImageFile; // 파일 선택 취소
        return; // 다음 파일 처리 중단
      }
      reader.onloadend = () => {
        setMainImageFile(reader.result);
        setNewProduct((prevState) => ({
          ...prevState,
          mainImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      return;
    }
  };

  const checkOnlyOneCategory = (checkThis) => {
    checkThis.checked === false
      ? setCheckCategory("")
      : setCheckCategory(checkThis.name);
  };

  const checkOnlyOneDetail = (checkThis) => {
    checkThis.checked === false
      ? setCheckDetail("")
      : setCheckDetail(checkThis.name);
  };

  const showDetailBar = () => {
    setNewProduct((prevState) => ({
      ...prevState,
      category: checkCategory,
      detail: checkDetail,
    }));
    checkCategory !== ""
      ? setDetailBar(detail[checkCategory])
      : setDetailBar([]);
  };

  const [newOption, setNewOption] = useState([]);

  const [newProduct, setNewProduct] = useState({
    category: "",
    detail: "",
    name: "",
    price: 0,
    mainImage: null,
    subImage1: null,
    subImage2: null,
    subImage3: null,
    description: "",
  });

  const valueChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const components = Array.from({ length: count }, (el, index) => {
    return (
      <ProductOption
        key={index}
        idx={index}
        count={count}
        setCount={setCount}
        newOption={newOption}
        setNewOption={setNewOption}
        checkCategory={checkCategory}
      />
    );
  });

  const [descriptionImgArray, setDescriptionImgArray] = useState([]);

  const cancelPreview = (index) => {
    let newDescriptionArray = [...descriptionImgArray];
    newDescriptionArray.splice(index, 1);
    setDescriptionImgArray(newDescriptionArray);
  };

  useEffect(() => {
    showDetailBar();
  }, [checkCategory, checkDetail]);

  useEffect(() => {}, [newOption]);

  const toAddProduct = async (e) => {
    e.preventDefault();

    try {
      if (newProduct.category === "") {
        Swal.fire({
          icon: "warning",
          categoryTitle: "카테고리 란이 비어있습니다.",
          text: ` 카테고리를 선택해주세요.`,
          showConfirmButton: true,
          confirmButtonText: "확인",
          confirmButtonColor: "#007bff",
        });
        return;
      }
      if (newProduct.detail === "") {
        Swal.fire({
          icon: "warning",
          categoryTitle: "디테일 란이 비어있습니다.",
          text: ` 디테일을 선택해주세요.`,
          showConfirmButton: true,
          confirmButtonText: "확인",
          confirmButtonColor: "#007bff",
        });
        return;
      }
      if (newProduct.name === "" || newProduct.name === null) {
        Swal.fire({
          icon: "warning",
          categoryTitle: "이름 란이 비어있습니다.",
          text: ` 상품의 이름을 입력해주세요.`,
          showConfirmButton: true,
          confirmButtonText: "확인",
          confirmButtonColor: "#007bff",
        });
        return;
      }
      if (newProduct.price <= 0) {
        Swal.fire({
          icon: "warning",
          categoryTitle:
            "가격을 입력하지 않았거나 올바르게 입력하지 않았습니다.",
          text: ` 가격을 입력해주세요.`,
          showConfirmButton: true,
          confirmButtonText: "확인",
          confirmButtonColor: "#007bff",
        });
        return;
      }
      if (newProduct.mainImage === null || newProduct.mainImage === "") {
        Swal.fire({
          icon: "warning",
          categoryTitle: "이미지를 선택하지 않았습니다.",
          text: ` 상품의 메인이미지를 선택주세요.`,
          showConfirmButton: true,
          confirmButtonText: "확인",
          confirmButtonColor: "#007bff",
        });
        return;
      }
      if (newOption[0] === undefined) {
        Swal.fire({
          icon: "warning",
          categoryTitle: "옵션 Error.",
          text: ` 옵션을 추가해주세요.`,
          showConfirmButton: true,
          confirmButtonText: "확인",
          confirmButtonColor: "#007bff",
        });
        return;
      }
      for (let index of newOption) {
        if (index.color == null) {
          Swal.fire({
            icon: "warning",
            categoryTitle: "색상이 비어있습니다.",
            text: ` 상품의 색상을 입력해주세요.`,
            showConfirmButton: true,
            confirmButtonText: "확인",
            confirmButtonColor: "#007bff",
          });
          return;
        }
        if (index.size === undefined) {
          Swal.fire({
            icon: "warning",
            categoryTitle: "선택하지 않은 사이즈가 있습니다.",
            text: ` 해당 옵션의 사이즈를 입력해주세요.`,
            showConfirmButton: true,
            confirmButtonText: "확인",
            confirmButtonColor: "#007bff",
          });
          return;
        }
        if (index.stock < 1) {
          Swal.fire({
            icon: "warning",
            categoryTitle: "옵션의 수량 오류.",
            text: ` 재고를 올바르게 입력했는지 확인해주세요.`,
            showConfirmButton: true,
            confirmButtonText: "확인",
            confirmButtonColor: "#007bff",
          });
          return;
        }
      }

      const body = {
        newProduct,
        newOption,
        descriptionImgArray,
      };

      await fetch("http://localhost:5000/addProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => {
        res.json();
        if (res.ok) {
          Swal.fire({
            icon: "success",
            title: "성공",
            text: "제품 추가하는데 성공했습니다.",
            showConfirmButton: true,
            confirmButtonText: "확인",
            confirmButtonColor: "#007bff",
          });
          navigate(`/productList`);
        } else {
          Swal.fire({
            icon: "warning",
            title: "실패",
            text: "제품의 추가하는데 실패했습니다.",
            showConfirmButton: true,
            confirmButtonText: "확인",
            confirmButtonColor: "#007bff",
          });
        }
      });
    } catch (error) {
      alert("제품 추가 중 오류가 발생했습니다.");
      console.log(error);
      return;
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="productAdd">
        <div className="inner">
          <form className="formBox" onSubmit={toAddProduct}>
            <div className="wrap">
              <h2 className="categoryTitle">카테고리</h2>
              <div className="boxWrap">
                {category.map((el) => {
                  return (
                    <div className="box" key={el}>
                      <p className="text">{el}</p>
                      <input
                        type="checkbox"
                        className="checkBoxCategory"
                        name={el}
                        value={el}
                        checked={checkCategory === el}
                        onChange={(e) => checkOnlyOneCategory(e.target)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="wrap">
              <h2 className="categoryTitle">디테일</h2>
              <div className="boxWrap">
                {detailBar.length === 0 ? (
                  <p className="text">카테고리를 선택해주세요</p>
                ) : (
                  detailBar.map((el, index) => {
                    return (
                      <div className="box" key={el}>
                        <p className="text">{el}</p>
                        <input
                          type="checkbox"
                          className="checkBoxDetail"
                          name={el}
                          value={el}
                          checked={checkDetail === el}
                          onChange={(e) => checkOnlyOneDetail(e.target)}
                        />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            <div className="wrap">
              <h2 className="categoryTitle">제품명</h2>
              <div className="boxWrap">
                <input
                  className="input"
                  type="text"
                  name="name"
                  onChange={valueChange}
                />
              </div>
            </div>
            <div className="wrap">
              <h2 className="categoryTitle">가격</h2>
              <div className="boxWrap">
                <input
                  className="input"
                  type="number"
                  name="price"
                  onChange={valueChange}
                />
              </div>
            </div>
            <div className="wrap stock">{components}</div>

            <div className="wrap img">
              <h2 className="categoryTitle">메인이미지 등록</h2>
              <div className="boxWrap">
                <div className="div">
                  <label htmlFor="mainImage">
                    <div className="addImg">+</div>
                  </label>
                  <img
                    style={
                      !mainImageFile
                        ? { display: "none" }
                        : { display: "block" }
                    }
                    className="previewImg main"
                    src={mainImageFile}
                    alt="메인이미지"
                  />
                  <input
                    id="mainImage"
                    type="file"
                    name="mainImage"
                    onChange={previewMainImg}
                    ref={mainImgRef}
                    accept="image/*"
                  />
                </div>
                <p
                  style={{
                    display: "inline-block",
                    margin: "0 15px",
                    color: "#ccc",
                    fontSize: "15px",
                  }}
                >
                  이미지파일은 ".jpg", ".png", ".bmp", ".gif", ".tif", ".webp",
                  ".heic", ".pdf"만 가능합니다.
                </p>
              </div>
            </div>

            <div className="wrap img">
              <h2 className="categoryTitle">서브이미지 등록</h2>
              <div className="boxWrap">
                {subImageCount.map((el, index) => {
                  return (
                    <SubImagePreview
                      key={el}
                      subImageId={subImageId[index]}
                      newProduct={newProduct}
                      setNewProduct={setNewProduct}
                    ></SubImagePreview>
                  );
                })}
              </div>
            </div>
            <div className="wrap description">
              <h2 className="categoryTitle">Description</h2>
              <div className="boxWrap">
                <MyDropzone
                  descriptionImgArray={descriptionImgArray}
                  setDescriptionImgArray={setDescriptionImgArray}
                />
              </div>
            </div>
            <div className="descriptionImgWrap">
              {descriptionImgArray.map((img, index) => {
                return (
                  <div key={index} style={{ display: "flex" }}>
                    <img src={img} alt="이미지" className="descriptionImg" />
                    <XCircleFill
                      className="deleteDescription"
                      onClick={() => cancelPreview(index)}
                    ></XCircleFill>
                  </div>
                );
              })}
            </div>
            <ButtonBox>
              <CustomButton
                className="btn1"
                buttonTitle="취소"
                handleLinkMove={handleCancle}
              />

              <CustomButton className="btn2" buttonTitle="상품추가" />
            </ButtonBox>
          </form>
        </div>
      </div>
    </>
  );
};
