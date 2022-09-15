import React, { useState } from "react";
import { Api } from "../api";
import { useInput } from "../hooks/useInput";
import "./../styles/index.scss";

function App(props) {
  //#region State
  const [name, setName] = useState("Hello Friend!");

  //#endregion State

  //#region actions

  //#endregion actions

  //#region components

  //#endregion components
  return (
    <div className="App">
      <h1>Starter Project</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default App;
