import React, { useContext } from 'react'
import { AppContext } from "../../App";
function GameEndPage() {

    // when the whole trial finished, generate a new game
    const startNewGame = () => {
        window.location.reload(true);
    };
    const { correctWord, cursorPos, gameEnd } =
        useContext(AppContext);
    return (
        < div className="game-end-container">
            <h3 className="game-end-header">
             {gameEnd.playerWon ? "Congratulations, You Win!" : "Game Over!"}
            </h3>
            <hr />
            <p className="modal-para">
                {gameEnd.playerWon
                    ? `You guessed the correct word in ${cursorPos.rowPosition} 
                    ${cursorPos.rowPosition > 1 ? "attempts" : "attempt"
                    }`
                    : "good try, but the correct word was:"}
            </p>
            <h4 className="modal-para-word">{correctWord}</h4>
            <hr />
            <div className="end-game-button-container" >
                <div>
                    <p> Would you like to try again?</p>
                </div>
                <div>
                    <button className="end-game-button"
                        onClick={startNewGame}
                    >Play Again</button>
                </div>
            </div>
        </div>
    );
}

export default GameEndPage