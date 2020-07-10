import React, { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";
import DataTable from "react-data-table-component";
import { columns, ERROR_MSG } from "../../Constants/Constant";

function ShowAll() {
  const { getAll } = useIndexedDB("locations");
  const [persons, setPersons] = useState();

  useEffect(() => {
    getAll().then((personsFromDB) => {
        console.log(personsFromDB);
      setPersons(personsFromDB);
    });
  }, []);

  return <p>Hello</p>;
}

export default ShowAll;
