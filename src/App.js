import React, { Component } from "react";
import "./App.scss";
import { initDB } from "react-indexed-db";
import { DBConfig } from "../src/Configurations/DBConfig";
import Header from "./Components/HeaderComponent/Header";
import ErrorBoundary from "./Components/ErrorBoundryComponent/ErrorBoundry";
import LocationContainer from "./Components/LocationContainerComponent/LocationContainer";

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
