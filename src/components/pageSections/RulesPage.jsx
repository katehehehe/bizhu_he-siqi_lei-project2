import React, { useContext } from "react";
import { AppContext } from "../../App";
import correct from "../../assets/correct.webp";
import partialCorrect from "../../assets/partialCorrect.webp";
import incorrect from "../../assets/incorrect.webp";


const RulesPage = () => {

  const { setNewGame } = useContext(AppContext);

  return  (
    <div className="rule-container click-rule-container">
      <div >
        <button className = "close-button"   
        onClick={() => {setNewGame(false);}}
        > X </button>      
      </div>
    <h4 className="rule-header">How To Play</h4>
    <p className="paragraph-margin">
      Guess the <span className="bold-small-font">WORDLE</span> in 6 tries.
    </p>
    <p className="paragraph-margin">
    • Each guess must be a valid 6-letter word.
    </p>
    <p className="paragraph-margin">
    • The color of the tiles will change to show how close your guess was to the word.
    </p>
    <hr />

    <img
      className="rules-img"
      src={correct}
      alt=""
    />
    <p className="paragraph-margin">
      <span className="bold-small-font">W</span> is in the word and
      in the correct spot.
    </p>
    <img
      className="rules-img"
      src={partialCorrect}
      alt=""
    />
    <p className="small-para-margin">
      <span className="bold-small-para">I</span> is in the word but
      is in the wrong spot.
    </p>
    <img
      className="rules-img"
      src={incorrect}
      alt=""
    />
    <p className="small-para-margin">
      <span className="bold-small-para">U</span> is not in the word
      in any spot.
    </p>
    <hr />
    <div className = "start-game-button-container">
      <button className="start-game-button"
        onClick={() => {
          setNewGame(false);
        }}
      >
        Start Game
      </button> 
    </div>
  </div>
) ;
};


export default RulesPage;
