import React from "react";
//Context
import { useGlobalContext } from "./context";

//IV (III.Game.js + V.Controllers.js)
//Dashboard component is for render players dynamically.
const Dashboard = (props) => {
  const { nicknames, currentScore, totalScore, activePlayer, winner } = useGlobalContext();
  //------------------
  //'player' is props from Game.js
  const { player } = props; //1,2
  return (
    <section
      //set dynamic css-class
      className={
        //check if is winner
        winner === player
          ? "player player--winner"
          : //if not winner => check active player or player
          activePlayer === player
          ? "player player--active"
          : "player"
      }
    >
      {/*Dynamically rendered Name: */}
      <h2 className="name">
        {
          //check if is winner
          winner === player
            ? //check if player entered name in form
              `Congrats! 
               ${
                 nicknames[player - 1]
                   ? //render player name or "You" instead
                     nicknames[player - 1]
                   : "You"
               } won!`
            : //OR
            //check if both players entered names
            nicknames[0] && nicknames[1]
            ? //use names
              nicknames[player - 1]
            : //or player number
              `Player ${player}`
        }
      </h2>
      <p className="score">{totalScore[player]}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{currentScore[player]}</p>
      </div>
    </section>
  );
};

export default Dashboard;
