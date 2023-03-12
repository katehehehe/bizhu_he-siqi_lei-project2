import React from "react";
import Row from "./Row";

const GameBoard = () => {
  return (
    // use several rows to form a board
    <div className = "game-board">


    <div className="board">
      <Row rowValue={0} />
      <Row rowValue={1} />
      <Row rowValue={2} />
      <Row rowValue={3} />
      <Row rowValue={4} />
      <Row rowValue={5} />
    </div>
    </div>
    
  );
};



export default GameBoard;