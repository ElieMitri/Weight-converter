import React, { useState } from "react";
import { useRef } from "react";

const Weight = () => {
  const searchRef = useRef("");
  const [kilograms, setKilograms] = useState(0)
  const [inputValue, setInputValue] = useState(0)
 
  function getWeight(e) {
   setInputValue(e.target.value)
  }

  return (
    <div className="weight__wrapper">
      <h1 className="weight__h1">Weight Converter</h1>
      <input
        type="number"
        className="weight__input"
        ref={searchRef}
        placeholder="Insert weight"
        onChange={getWeight}
      />
      <div className="weights__wrapper">
        <div className="kg__weight--wrapper">{inputValue * 1} kg</div>
        <div className="lb__weight--wrapper">{inputValue * 2.20462} lb</div>
        <div className="oz__weight--wrapper">{inputValue * 35.274} Oz</div>
      </div>
    </div>
  );
};

export default Weight;
