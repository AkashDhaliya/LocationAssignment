import React, { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";
import DataTable from "react-data-table-component";
import { ERROR_MSG } from "../../Constants/Constant";
import Loading from "../LoadingComponent/Loading";
import { FaArrowDown, FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const sortIcon = <FaArrowDown />;

function LocationTable() {
  const { getAll, deleteRecord } = useIndexedDB("locations");
  const [locationData, setLocationData] = useState([]);
  const [isResponse, setIsResponse] = useState(false);
  const [isError, setisError] = useState(false);

  const deleteLocation = (row) => {
    if (
      window.confirm(`Are you sure you want to delete:\r ${row.locationName}?`)
    ) {
      deleteRecord(row.id).then((event) => {
        alert("Deleted!");
      });
    }
  };

  const updateLocation = (row) => {
    if (window.confirm(`Are you sure you want to delete:\r ${row.name}?`)) {
      const { data } = this.state;
      const index = data.findIndex((r) => r === row);

      this.setState((state) => ({
        toggleCleared: !state.toggleCleared,
        data: [...state.data.slice(0, index), ...state.data.slice(index + 1)],
      }));
    }
  };

  const columns = [
    {
      name: "Location Name",
      selector: "locationName",
      sortable: true,
    },
    {
      name: "Address",
      selector: "addressLine1",
      sortable: true,
    },
    {
      name: "Phone No.",
      selector: "phoneNo",
      sortable: true,
    },
    {
      cell: (row) => (
        <div>
          <FaPencilAlt
            className="editIcon"
            onClick={updateLocation.bind(null, row)}
          />
          <FaTrashAlt
            className="deleteLocation"
            onClick={deleteLocation.bind(null, row)}
          />
        </div>
      ),
      button: true,
    },
  ];

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
            highlightOnHover
            defaultSortField="locationName"
            pagination
            sortIcon={sortIcon}
            theme="solarized"
            data={locationData}
          />
        }
      </section>
    ) : (
      <section className="locationSection">
        <img
          src={require("../../Images/no_locations.jpg")}
          alt="No Locations available"
        />
      </section>
    );
  } else if (isResponse && isError) {
    return (
      <section className="locationSection">
        <p> {ERROR_MSG}</p>
      </section>
    );
  } else {
    return (
      <section className="locationSection loading">
        <Loading />
      </section>
    );
  }
}

export default LocationTable;
