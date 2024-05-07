import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/productAdd.css";

//컴포넌트
import { Nav } from "../components/nav";
import { SubImagePreview } from "../components/subImgPreview";

export const ProductEdit = id => {
  const navigate = useNavigate();
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
    if (file.name.includes("http://") || file.name.includes("https://")) {
      setNewProduct(prevState => ({
        ...prevState,
        mainImage: file.name,
      }));
    } else {
      setNewProduct(prevState => ({
        ...prevState,
        mainImage: "../img/" + file.name,
      }));
    }
  };

  const checkOnlyOneCategory = checkThis => {
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

  const checkOnlyOneDetail = checkThis => {
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
    setNewProduct(prevState => ({
      ...prevState,
      category: checkCategory,
      detail: checkDetail,
    }));
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

  const valueChange = e => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const toAddProduct = async e => {
    e.preventDefault();

    try {
      if (newProduct.category === "") {
        alert("카테고리를 선택해주세요.");
        return;
      }
      if (newProduct.detail === "") {
        alert("디테일을 선택해주세요.");
        return;
      }
      if (newProduct.name === "" || newProduct.name === null) {
        alert("이름을 입력해주세요.");
        return;
      }
      if (newProduct.mainImage === null) {
        alert("메인 이미지를 선택 해주세요.");
        return;
      }
      if (newProduct.color === null || newProduct.color === "") {
        alert("제품의 색상을 입력해주세요.");
        return;
      }
      if (newProduct.price === null || newProduct.price === 0) {
        alert("제품의 가격을 입력해주세요.");
        return;
      }
      if (newProduct.size === null || newProduct.size === null) {
        alert("제품의 사이즈를 선택해주세요.");
        return;
      }
      if (newProduct.stock === null || newProduct.stock === "") {
        alert("제품의 재고수량을 입력해주세요.");
        return;
      }

      // console.log(newProduct.mainImage);

      const result = await fetch(`http://localhost:5000/productEdit/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      }).then(res => {
        res.json();
        if (res.ok) {
          alert("제품을 추가했습니다.");
          navigate("/productList");
        } else {
          alert("제품을 추가하는데 실패했습니다.");
          return;
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
          <form className="formBox">
            <div className="wrap">
              <h2 className="title">카테고리</h2>
              <div className="boxWrap">
                {category.map(el => {
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
                        onChange={e => checkOnlyOneCategory(e.target)}
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
                          onChange={e => checkOnlyOneDetail(e.target)}
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
                      newProduct={newProduct}
                      setNewProduct={setNewProduct}
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