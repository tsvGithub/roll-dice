import React from "react";
//context
import { useGlobalContext } from "./context";
//default img
// import dice_1 from "./img/dice-1.png";
// import dice_2 from "./img/dice-2.png";
// import dice_3 from "./img/dice-3.png";
// import dice_4 from "./img/dice-4.png";
import dice_5 from "./img/dice-5.png";
// import dice_6 from "./img/dice-6.png";
// import dice_5 from "../public/img/dice-5.png";

//V (IV.Dasboard.js + VI.Input.js)
//Controllers component is for displaying the dice
//and the control buttons.
const Controllers = () => {
  const { rollDice, dice, newGame, holdDice } = useGlobalContext();

  const randomDice = `./img/dice-${dice}.png`

  return (
    <section>
      {/* <img src={dice_5} alt="" /> */}
      {/*dynamically rendered images */}
      <img
        src={
          dice === null
            ? //set default image
              // require(`./img/dice-5.png`).default
                    dice_5

              // require(`../public/img/dice-5.png`).default
            : //or render dynamically changed dice (context.js)
            randomDice
              // require(`./img/dice-${dice}.png`).default
              // require(`../public/img/dice-${dice}.png?raw=true`).default
        }
        alt="dice"
        className="dice"
      />

      <button
        className="btn btn--new"
        //start the new game:
        onClick={newGame}
      >
        🔄 New game
      </button>
      <button
        className="btn btn--roll"
        //roll the dice:
        onClick={rollDice}
      >
        🎲 Roll dice
      </button>
      <button
        className="btn btn--hold"
        //hold the dice
        onClick={holdDice}
      >
        📥 Hold
      </button>
    </section>
  );
};

export default Controllers;
