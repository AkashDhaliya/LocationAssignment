import React, { Component } from "react";
import "./App.scss";
import { initDB } from "react-indexed-db";
import { DBConfig } from "../src/Configurations/DBConfig";
import Header from "./Components/HeaderComponent/Header";
import ErrorBoundary from "./Components/ErrorBoundryComponent/ErrorBoundry";
import DataContainer from "./Components/DataContainerComponent/DataContainer";

initDB(DBConfig);

class App extends Component {
  render() {
    return (
      <div className="LocationApp">
        <Header />
        <ErrorBoundary>
          <DataContainer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
