
import React from 'react';

const Star = ({ size, color, filled, handleClick, i}) => {
  const starPath = "M12 2 L15.09 8.36 L22 9.27 L17 14.73 L18.18 22 L12 19 L5.82 22 L7 14.73 L2 9.27 L8.91 8.36 Z";
  
  return (
    
      <svg width={size} height={size} viewBox="0 0 24 24" style={{ fill: filled ? color : "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"}} onClick = {handleClick} >
        
      <path d={starPath} />
      </svg>
    
    
  );
};

export default Star;