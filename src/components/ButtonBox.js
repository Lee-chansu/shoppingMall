import React from "react";
import { Link } from "react-router-dom";
import "../css/button.css";

const ButtonBox = ({ children, className = "" }) => {
  return (
    <div className={`buttonBox ${className}`}>
      {children}
    </div>
  );
};

export default ButtonBox;
