import React from "react";
import "../css/button.css";

const ButtonBox = ({children}) => {
  return (
    <div className="buttonBox">
      {children}
    </div>
  );
};

export default ButtonBox;
