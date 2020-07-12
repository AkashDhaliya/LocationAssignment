import React from "react";
import DataTable from "react-data-table-component";
import { GET_ERROR_MSG, customStyles } from "../../Constants/Constant";
import Loading from "../LoadingComponent/Loading";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import formatStringByPattern from "format-string-by-pattern";

function LocationTable(props) {
  const columns = [
    {
      cell: (row) => (
        <div className="serialNoIconDiv">{row.serial}</div>
      ),
      width:"60px",
    },
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

  const paginationOptions = { rowsPerPageText: "Items per page" };

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
          paginationComponentOptions={paginationOptions}
          dense={true}
          size={10}
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
        <p> {GET_ERROR_MSG}</p>
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
