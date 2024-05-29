import React from "react";

const CustomButton = ({ className = "", buttonTitle, handleLinkMove }) => {
  return (
    <button className={className} onClick={handleLinkMove}>
      {buttonTitle}
    </button>
  );
};

export default CustomButton;