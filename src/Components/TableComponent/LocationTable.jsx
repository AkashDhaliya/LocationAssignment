import React, { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";
import DataTable from "react-data-table-component";
import { columns, ERROR_MSG } from "../../Constants/Constant";
import Loading from "../LoadingComponent/Loading";
import {FaArrowDown} from 'react-icons/fa';

const sortIcon = <FaArrowDown />;

function LocationTable() {
  const { getAll } = useIndexedDB("locations");
  const [locationData, setLocationData] = useState([]);
  const [isResponse, setIsResponse] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    getAll().then((locationData) => {
      console.log(locationData);
      setLocationData(locationData);
      setIsResponse(true);
      setisError(false);
    });
  }, []);

  if (isResponse && !isError) {
    return locationData.length !== 0 ? (
      <section className="locationSection">
        {
          <DataTable
            columns={columns}
            pagination
            sortIcon={sortIcon}
            theme="solarized"
            data={locationData}
          />
        }
      </section>
    ) : (
      <section className="locationSectionNoData">
        <img
          src={require("../../Images/no_locations.jpg")}
          alt="No Locations available"
        />
      </section>
    );
  } else if (isResponse && isError) {
    return (
      <section className="locationSectionNoData">
        <p> {ERROR_MSG}</p>
      </section>
    );
  } else {
    return (
      <section className="locationSectionNoData">
        <Loading />
      </section>
    );
  }
}

export default LocationTable;
