import React from "react";
import Game from "./Game";
import { AppProvider } from "./context";
import "./index.css";

//--------------
//I.  (II. context.js)
//Wrapp whole app (Game.js) into AppProvider
const App = () => {
  return (
    <div className="container">
      <AppProvider>
        <Game />
      </AppProvider>
    </div>
  );
};

export default App;
