import React from "react";

export const MainItem = ({ val }) => {
  return (
    <div className="product">
      <div className="image">
        <div className="text-wrapper">
          <img src={val.src} />
        </div>
      </div>
      <div className="info-box">
        <div className="product-name">
          <div className="text-wrapper-2">{val.pName}</div>
        </div>
        <div className="product-info">
          <div className="text-wrapper-3">{val.pContent}</div>
        </div>
      </div>
    </div>
  );
};
