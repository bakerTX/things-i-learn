import React from "react";
import alien from "./alien.png";
import "./App.css";

// containers
import List from "./containers/List";

// data
import things from "./data/things";

function App() {
  return (
    <div className="App">
      <img src={alien} className="alien-logo" alt="logo" />
      <List things={things} />
    </div>
  );
}

export default App;
