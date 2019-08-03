import React from "react";
import alien from "./alien.png";
import "./App.css";

// containers
import List from "./containers/List";

// data
import things from "./data/things";

function App() {
  return (
    <div className="App grid">
      <div className="header">
        <img src={alien} className="alien-logo" alt="logo" />
      </div>
      <div className="content">
        <List things={things} />
      </div>
      <div className="tagline">
        <p>
          Documenting my journey as a web developer, one little lesson at a time
        </p>
      </div>
    </div>
  );
}

export default App;
