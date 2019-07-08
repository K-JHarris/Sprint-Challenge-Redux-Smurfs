import "./App.css";

import React, { Component } from "react";

import SmurfVillage from "./SmurfVillage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Smurf Village</h2>
        <SmurfVillage />
      </div>
    );
  }
}

export default App;
