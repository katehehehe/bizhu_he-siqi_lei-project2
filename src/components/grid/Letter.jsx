import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";

// this takes care of each individual cell guess 
const Letter = ({ letterPosition, value }) => {

  
    const { board, correctWord, cursorPos, setDisabledLetters} =
        useContext(AppContext);
    const letter = board[value][letterPosition];
    
    // Correct letter in the correct position
  const correctLetter = correctWord[letterPosition] === letter.toLowerCase();

  // Correct letter in the wrong position
  const partialCorrect =
    !correctLetter && letter !== "" && correctWord.includes(letter.toLowerCase());

  // Determines class for letter
  let letterState;
if (cursorPos.rowPosition > value) {
  if (correctLetter) {
    letterState = "correct";
  } else if (partialCorrect) {
    letterState = "partial";
  } else {
    letterState = "incorrect";
  }
} 

useEffect(() => {
    // Once word guess is complete, if letter is incorrect add to disabled letters array
    if (letterState === "incorrect") {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [cursorPos.rowPosition]); 
    return (
        <div className="letter"
        id={letterState}
        >
            {letter}
        </div>
    );
};

export default Letter; 