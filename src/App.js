import React, { Component } from "react";
import Header from "./Components/HeaderComponent/Header";
import LocationContainer from "./Components/LocationComponent/LocationContiner"
import "./App.scss";
import { DBConfig } from "../src/Configurations/DBConfig";
import { initDB } from "react-indexed-db";

initDB(DBConfig);

class App extends Component {
  render() {
    return (
      <div className="LocationApp">
        <Header />
        <LocationContainer />
      </div>
    );
  }
}

export default App;
