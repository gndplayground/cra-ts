import React, { useState, } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [count, setCount] = useState(0);

  function appClick() {
    setCount(count + 1);
  }

  return (
    <div className="App" onClick={appClick}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>You have clicked the page: {count}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
