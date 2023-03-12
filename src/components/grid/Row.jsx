import React from "react";
import Letter from "./Letter.jsx";

// this is the normal row, and each comprised 6 letters
const Row = ({ rowValue }) => {
  return (
    <div className="row">
      <Letter letterPosition={0} value={rowValue} />
      <Letter letterPosition={1} value={rowValue} />
      <Letter letterPosition={2} value={rowValue} />
      <Letter letterPosition={3} value={rowValue} />
      <Letter letterPosition={4} value={rowValue} />
      <Letter letterPosition={5} value={rowValue} />
    </div>
  );
};



export default Row;
