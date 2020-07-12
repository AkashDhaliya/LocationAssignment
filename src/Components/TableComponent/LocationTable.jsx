import React from "react";
import DataTable from "react-data-table-component";
import { ERROR_MSG,customStyles } from "../../Constants/Constant";
import Loading from "../LoadingComponent/Loading";
import { FaArrowDown, FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import formatStringByPattern from "format-string-by-pattern";

const sortIcon = <FaArrowDown />;

function LocationTable(props) {
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
      cell: (row) => (
        <div>{formatStringByPattern("(999) 999-9999", row.phoneNo)}</div>
      ),
    },
    {
      cell: (row) => (
        <div>
          <FaPencilAlt
            className="editIcon"
            onClick={props.update.bind(null, row)}
          />
          <FaTrashAlt
            className="deleteLocation"
            onClick={props.delete.bind(null, row)}
          />
        </div>
      ),
      button: true,
    },
  ];

  const { locationData, isResponse, isError } = props;
  if (isResponse && !isError) {
    return locationData.length !== 0 ? (
      <section className="locationSection">
        <DataTable
          columns={columns}
          noHeader={true}
          highlightOnHover
          defaultSortField="locationName"
          pagination
          dense={true}
          sortIcon={sortIcon}
          customStyles={customStyles}
          theme="solarized"
          data={locationData}
        />
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
