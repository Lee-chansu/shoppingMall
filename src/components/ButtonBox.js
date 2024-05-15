import React from "react";
import { Link } from "react-router-dom";
import "../css/button.css";

const ButtonBox = ({children}) => {
  return (
    <div className="buttonBox">
      {children}
    </div>
  );
};

export default ButtonBox;
