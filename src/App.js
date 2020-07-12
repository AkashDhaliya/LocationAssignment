import React, { Component } from "react";
import Header from "./Components/HeaderComponent/Header";
import LocationContainer from "./Components/LocationComponent/LocationContainer";
import ErrorBoundary from "./Components/ErrorBoundryComponent/ErrorBoundry";
import "./App.scss";
import { DBConfig } from "../src/Configurations/DBConfig";
import { initDB } from "react-indexed-db";

initDB(DBConfig);

class App extends Component {
  render() {
    return (
      <div className="LocationApp">
        <Header />
        <ErrorBoundary>
          <LocationContainer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
