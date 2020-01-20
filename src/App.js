import React from "react";
import "./App.css";
import User from "./components/User/index";
import Group from "./components/Group.js";

function App() {
  return (
    <div className="App">
      <User />
      <hr />
      <Group />
    </div>
  );
}

export default App;
