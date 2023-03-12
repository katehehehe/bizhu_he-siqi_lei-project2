
import information from '../../assets/information.png';
import setting from '../../assets/setting.png';
import React, { useState, useContext, } from "react";
import RulesPage from './RulesPage';
import { AppContext } from "../../App";

function Navbar(props) {
    // The rule page pops up if this is the first time a user plays the game
    const [newGame, setNewGame] = useState(false);
  return (
    <div className="navbar">
          <img src = {information} 
            className="navbar-img left-img"
            onClick={() => {setNewGame(true);}}
    
          />
            <h1 className="full-width">Wordle</h1>
          
            <img src = {setting}
              className="navbar-img right-img"
            //   onClick={() => setIsDatePickerModalOpen(true)}
            />
<AppContext.Provider value={{
            newGame,
            setNewGame,
          }}>
            {newGame && <RulesPage />}
          </AppContext.Provider>
    </div>
  )
}


export default Navbar