import React, { useState } from "react";

function MenuItem({ image, name, price }) {
  const [count, setCount] = useState(0);

  const increment = () => {
   
    setCount(count + 1);
  };

  const decrement = () => {
    if(count!=0){
    setCount(count - 1);
  }
  };

  return (
    <div className="menuItem">
      <div className="jkContainer">
        <div
          className="jk"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <p className="hoverParagraph">{name}</p>
      </div>
      <span className="counter">
        <span> {price} DT </span>
        <button onClick={decrement} className="aaz">
          <span className="aabz">-</span>
        </button>
        <span>{count}</span>
        <button onClick={increment} className="aaz">
          <span className="aabz">+</span>
        </button>
      </span>
    </div>
  );
}

export default MenuItem;
