import React from "react";
import Dashboard from "./Dashboard";
import Controllers from "./Controllers";
import Input from "./Input";

//context
import { useGlobalContext } from "./context";

//III. (II.context.js + IV. Dashboard.js)
//Game is wrapper component =>
//Dashboard component is used to display
//players and Controller component is for buttons and dice
const Game = () => {
  const { players } = useGlobalContext();
  return (
    <div className="wrapper">
      <h1 className="name">Roll Dice Game</h1>
      <Input />

      <main>
        <Dashboard player={players[0]} />
        <Controllers />
        <Dashboard player={players[1]} />
      </main>
    </div>
  );
};

export default Game;
