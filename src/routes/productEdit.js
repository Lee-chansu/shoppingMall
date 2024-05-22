import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../css/productEdit.css";

//컴포넌트
import { Nav } from "../components/nav";
import { SubImagePreview } from "../components/subImgPreview";
import { ProductOption, EditInfo } from "../components/productOptionAdd";

export const ProductEdit = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const mainImgRef = useRef();

  const [newProduct, setNewProduct] = useState({});
  const [option, setOption] = useState([]);
  const [newOption, setNewOption] = useState([]);
  const [optionLength, setOptionLength] = useState(0);
  const [detailBar, setDetailBar] = useState([]);
  const [checkDetail, setCheckDetail] = useState("");
  const [mainImageFile, setMainImageFile] = useState("");
  const category = ["아우터", "상의", "하의", "신발", "악세사리"];
  const [checkCategory, setCheckCategory] = useState("");
  const [count, setCount] = useState(0);

  const subImageCount = [0, 1, 2];
  const subImageId = ["subImage1", "subImage2", "subImage3"];

  const detail = {
    아우터: ["코트", "블레이저", "패딩"],
    상의: ["반팔", "긴팔", "티셔츠", "후드", "러닝"],
    하의: ["청바지", "슬랙스", "카고바지", "반바지"],
    신발: ["샌들", "런닝화", "구두"],
    악세사리: ["귀걸이", "가방", "피어싱", "모자"],
  };

  const loadProduct = async () => {
    const getProduct = await fetch(`http://localhost:5000/product/${id}`).then(
      (res) => {
        return res.json();
      }
    );
    setNewProduct(getProduct);
    setCheckCategory(getProduct.category);
    setCheckDetail(getProduct.detail);
  };

  const loadOption = async () => {
    const loadData = await fetch(
      `http://localhost:5000/productOption/${id}`
    ).then((res) => {
      return res.json();
    });
    setOptionLength(loadData.length);
    setOption(loadData);
  };

  const previewMainImg = () => {
    const file = mainImgRef.current.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
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
        alert(`${file.name} 파일은 허용되지 않는 확장자입니다.`);
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
    } else {
      return;
    }
  };

  const checkOnlyOneCategory = (checkThis) => {
    if (checkThis.checked === false) {
      setCheckCategory("");
      setCheckDetail("");
    } else {
      setCheckCategory(checkThis.name);
    }
  };

  const checkOnlyOneDetail = (checkThis) => {
    if (checkThis.checked === false) {
      setCheckDetail("");
    } else {
      setCheckDetail(checkThis.name);
    }
  };

  const showDetailBar = () => {
    setNewProduct({
      ...newProduct,
      category: checkCategory,
      detail: checkDetail,
    });
    checkCategory !== ""
      ? setDetailBar(detail[checkCategory])
      : setDetailBar([]);
  };

  const valueChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  useEffect(() => {
    loadProduct();
    loadOption();
  }, []);

  useEffect(() => {
    showDetailBar();
  }, [checkCategory, checkDetail]);

  const addTag = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  //새로운 정보를 추가하는 컴포넌트
  const components = Array.from({ length: count }, (el, index) => {
    return (
      <ProductOption
        key={index}
        checkCategory={checkCategory}
        newOption={newOption}
        setNewOption={setNewOption}
        idx={index}
        count={count}
        setCount={setCount}
      />
    );
  });

  //기존의 정보를 불러오는 컴포넌트
  const editComponents = Array.from({ length: optionLength }, (el, index) => {
    // const currentOption = newOption[index];
    return (
      <EditInfo
        key={index}
        newOption={option}
        setNewOption={setOption}
        optionLength={optionLength}
        setOptionLength={setOptionLength}
        idx={index}
        count={count}
        setCount={setCount}
      />
    );
  });

  useEffect(() => {}, [option, newOption]);

  const toEditProduct = async (e) => {
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
      if (newProduct.color === "" || newProduct.color === "") {
        alert("제품의 색상을 입력해주세요.");
        return;
      }
      if (newProduct.price === null || newProduct.price === 0) {
        alert("제품의 가격을 입력해주세요.");
        return;
      }
      if (newProduct.size === "" || newProduct.size === null) {
        alert("제품의 사이즈를 선택해주세요.");
        return;
      }
      if (newProduct.stock === null || newProduct.stock === "") {
        alert("제품의 재고수량을 입력해주세요.");
        return;
      }

      const body = {
        newProduct,
        newOption,
        option,
      };

      await fetch(`http://localhost:5000/productEdit/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => {
        res.json();
        if (res.ok) {
          alert("제품의 정보를 수정했습니다.");
          navigate(`/productList/detail/description/${id}`);
        } else {
          alert("제품의 정보를 수정하는데 실패했습니다.");
          console.log(newProduct);
          return;
        }
      });
    } catch (error) {
      alert("제품 수정 중 오류가 발생했습니다.");
      console.log(error);
      return;
    }
  };

  return (
    <>
      <Nav />
      <div className="productEdit">
        <div className="inner">
          <form onSubmit={toEditProduct} className="formBox">
            <div className="wrap">
              <h2 className="title">카테고리</h2>
              <div className="boxWrap">
                {category.map((el) => {
                  return (
                    <div className="box" key={el}>
                      <label className="text" htmlFor={el}>
                        {el}
                      </label>
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
              <h2 className="title">제품명</h2>
              <div className="boxWrap">
                <input
                  type="text"
                  name="name"
                  defaultValue={newProduct.name}
                  onChange={valueChange}
                />
              </div>
            </div>
            <div className="wrap">
              <h2 className="title">가격</h2>
              <div className="boxWrap">
                <input
                  type="text"
                  name="price"
                  defaultValue={newProduct.price}
                  onChange={valueChange}
                />
              </div>
            </div>
            <div className="wrap stock">
              <h2 className="title">
                옵션
                <button className="btn" onClick={addTag}>
                  +
                </button>
              </h2>
              {editComponents}
              {components}
            </div>
            <div className="wrap img">
              <h2 className="title">메인이미지 등록</h2>
              <div className="boxWrap">
                <label htmlFor="mainImage">
                  <div className="addImg" style={{ marginLeft: "5px" }}>
                    +
                  </div>
                </label>
                <img
                  style={{
                    display: newProduct.mainImage
                      ? "block"
                      : mainImageFile
                      ? "block"
                      : "none",
                  }}
                  className="previewImg main"
                  src={!mainImageFile ? newProduct.mainImage : mainImageFile}
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
              <button>수정완료</button>
              <Link to={`/productList/detail/description/${id}`}>
                <button>취소</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
