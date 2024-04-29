import React, { useEffect, useRef, useState } from "react";
import "../css/productAdd.css";

//컴포넌트
import { Nav } from "../components/nav";
import { Link } from "react-router-dom";
import { SubImagePreview } from "../components/subImgPreview";

export const ProductAdd = () => {
  const category = ["아우터", "상의", "하의", "신발", "악세사리"];
  const [checkCategory, setCheckCategory] = useState("");

  const detail = {
    아우터: ["코트", "블레이저", "패딩"],
    상의: ["반팔", "긴팔", "티셔츠", "후드", "러닝"],
    하의: ["청바지", "슬랙스", "카고바지", "반바지"],
    신발: ["샌들", "런닝화", "구두"],
    악세사리: ["귀걸이", "가방", "피어싱", "모자"],
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
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setMainImageFile(reader.result);
    };
    setNewProduct((prevState) => ({
      ...prevState,
      mainImage: file,
    }));
  };

  const checkOnlyOneCategory = (checkThis) => {
    checkThis.checked === false
      ? setCheckCategory("")
      : setCheckCategory(checkThis.name);
    const checkBox = document.getElementsByClassName("checkBoxCategory");
    for (let ch of checkBox) {
      if (ch !== checkThis) {
        ch.checked = false;
      }
    }
  };

  useEffect(() => {
    showDetailBar();
  }, [checkCategory, checkDetail]);

  const checkOnlyOneDetail = (checkThis) => {
    checkThis.checked === false
      ? setCheckDetail("")
      : setCheckDetail(checkThis.name);
    const checkBox = document.getElementsByClassName("checkBoxDetail");
    for (let ch of checkBox) {
      if (ch !== checkThis) {
        ch.checked = false;
      }
    }
  };

  const showDetailBar = () => {
    checkCategory !== ""
      ? setDetailBar(detail[checkCategory])
      : setDetailBar([]);
  };

  const [newProduct, setNewProduct] = useState({
    category: "",
    detail: "",
    name: "",
    price: 0,
    color: "",
    size: 0,
    stock: 0,
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

  const toAddProduct = async (e) => {
    e.preventDefault();

    console.log(newProduct.mainImage);

    // if (newProduct.category.length === 0) {
    //   alert("카테고리를 선택해주세요.");
    // } else if (newProduct.detail.length === 0) {
    //   alert("디테일을 선택해주세요.");
    // } else if (newProduct.name === null) {
    // }

    // let newProduct;
    // const result = await fetch("http://localhost:5000/addProduct/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newProduct),
    // });
  };

  return (
    <>
      <Nav></Nav>
      <div className="productAdd">
        <div className="inner">
          <form className="formBox">
            <div className="wrap">
              <h2 className="title">카테고리</h2>
              <div className="boxWrap">
                {category.map((el) => {
                  return (
                    <div className="box" key={el}>
                      <label className="text" for={el}>
                        {el}
                      </label>
                      <input
                        type="checkbox"
                        className="checkBoxCategory"
                        name={el}
                        value={el}
                        onChange={(e) => checkOnlyOneCategory(e.target)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="wrap">
              <h2 className="title">디테일</h2>
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
                          onChange={(e) => checkOnlyOneDetail(e.target)}
                        />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            <div className="wrap">
              <h2 className="title">제품명</h2>
              <div className="boxWrap">
                <input type="text" name="name" onChange={valueChange} />
              </div>
            </div>
            <div className="wrap">
              <h2 className="title">가격</h2>
              <div className="boxWrap">
                <input type="text" name="price" onChange={valueChange} />
              </div>
            </div>
            <div className="wrap stock">
              <h2 className="title">재고수량</h2>
              <div className="boxWrap">
                <div className="box">
                  <label for="color">color</label>
                  <input type="text" name="color" onChange={valueChange} />
                </div>
                <div className="box">
                  <label for="size">size</label>
                  {checkCategory === "신발" ? (
                    <select id="size" name="size" onChange={valueChange}>
                      <option value="260">260</option>
                      <option value="270">270</option>
                      <option value="280">280</option>
                      <option value="290">290</option>
                    </select>
                  ) : (
                    <select name="size" onChange={valueChange}>
                      <option value="95">95</option>
                      <option value="100">100</option>
                      <option value="105">105</option>
                      <option value="free">free</option>
                    </select>
                  )}
                </div>
                <div className="box">
                  <label for="stock">stock</label>
                  <input type="number" name="stock" onChange={valueChange} />
                </div>
              </div>
            </div>
            <div className="wrap img">
              <h2 className="title">메인이미지 등록</h2>
              <div className="boxWrap">
                <label for="mainImage">
                  <div className="addImg" style={{ "margin-left": "5px" }}>
                    +
                  </div>
                </label>
                <img
                  style={
                    !mainImageFile ? { display: "none" } : { display: "block" }
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
                />
              </div>
            </div>
            <div className="wrap img">
              <h2 className="title">서브이미지 등록</h2>
              <div className="boxWrap">
                {subImageCount.map((el, index) => {
                  return (
                    <SubImagePreview
                      key={el}
                      subImageId={subImageId[index]}
                    ></SubImagePreview>
                  );
                })}
              </div>
            </div>
            <div className="wrap description">
              <h2 className="title">상품 상세설명</h2>
              <div className="boxWrap">
                <input type="text" name="description" onChange={valueChange} />
              </div>
            </div>
            <div className="btnForm">
              <button onClick={toAddProduct}>추가</button>
              <Link to="/productList">
                <button>취소</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
