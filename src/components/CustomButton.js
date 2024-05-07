import React from "react";
import { Link } from "react-router-dom";
const CustomButton = ({ className = "", buttonTitle, handleLinkMove }) => {
  return (
    <button className={className} onClick={handleLinkMove}>
      {buttonTitle}
    </button>
  );
};

export default CustomButton;
