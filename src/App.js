import React, { Component } from "react";
import Header from "./Components/HeaderComponent/Header";
import LocationTable from "./Components/TableComponent/LocationTable";
import "./App.scss";
import { DBConfig } from "../src/Configurations/DBConfig";
import { initDB } from "react-indexed-db";

initDB(DBConfig);

class App extends Component {
  render() {
    return (
      <div className="LocationApp">
          <Header />
          <LocationTable />
        </div>
    );
  }
}

export default App;
