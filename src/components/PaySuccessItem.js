import React, { useEffect, useState } from "react";
import styles from "../css/paySuccess.css";

export const PaySuccessItem = ({ val }) => {
  return (
//     <div className="paidItemList">
//       <div className="p1">
//         <img src={val.mainImage} width="200px" height="200px" />
//       </div>
//       <div className="p2">
//         <p className="pname">{val.name}</p>
//       </div>
//       <div className="p3">
//         <span className="poption">
//           option : {val.color} / {val.size} / {val.amount} / {val.price}
//         </span>
//       </div>
//     </div>
//   );
// };

<div className="paidItem">
      <div className="p1">
        <img src={val.mainImage} width="200px" height="200px" alt={val.name} />
      </div>
      <div className="p2">
        <p className="pname">{val.name}</p>
      </div>
      <div className="p3">
        <span className="poption">
          option : {val.color} / {val.size} / {val.amount} / {val.price}
        </span>
      </div>
    </div>
  );
};