import { useEffect, useState } from "react";
import "../css/detail.css";

export const Detail = (queryParamValue, detail, setProductList) => {
  const [detailBar, setDetailBar] = useState([]);
  const [selectDetail, setSelectDetail] = useState("");

  const loadDetailProduct = async (e) => {
    setSelectDetail(e.target.value);
    let getProduct;
    if (queryParamValue) {
      getProduct = await fetch(
        `http://localhost:5000/product?detail=${selectDetail}`
      ).then((res) => res.json());
    } else {
      getProduct = await fetch(`http://localhost:5000/product`).then((res) =>
        res.json()
      );
    }
    setProductList(getProduct);
  };

  const showDetailBar = () => {
    queryParamValue !== ""
      ? setDetailBar(detail[queryParamValue])
      : setDetailBar([]);
  };
  
  useEffect(() => {
    showDetailBar();
  }, [queryParamValue]);

  return (
    <div className=" detail">
      <div className="detail inner">
        {console.log(detailBar.length)}
        {detailBar.length > 0 ? (
          detailBar.map((el) => {
            return (
              <div className="wrapper">
                <button className="text" onClick={loadDetailProduct({ el })}>
                  {el}
                </button>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
