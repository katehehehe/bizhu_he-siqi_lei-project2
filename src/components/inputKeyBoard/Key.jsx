import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

const Key = ({ key, className, letter, disabled }) => {
  // Subscribes to context created in App.js and uses the states previously defined
  const { onPlayerSelect, onPlayerEnter, onPlayerDelete } =
    useContext(AppContext);

  // Onclick when player selects a key on keyboard
  const inputLetter = () => {
    if (letter === "ENTER") {
      onPlayerEnter();
    } else if (letter === "←") {
      onPlayerDelete();
    } else {
      onPlayerSelect(letter);
    }
  };

  return (
    <div
      className={className}
      key={key}
      onClick={inputLetter}
      id={disabled ? "disabled" : ""}
    >
      {letter}
    </div>
  );
};

export default Key;