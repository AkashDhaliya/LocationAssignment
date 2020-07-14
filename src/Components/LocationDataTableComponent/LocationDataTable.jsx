import React from "react";
import DataTable from "react-data-table-component";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import formatStringByPattern from "format-string-by-pattern";
import { GET_ERROR_MSG, customStyles } from "../../Constants/Constant";
import LoadingSpinner from "../LoadingSpinnerComponent/LoadingSpinner";
import LocationDataTableExpander from "../LocationDataTableExpanderComponent/LocationDataTableExpander";

function LocationDataTable(props) {
  const columns = [
    {
      cell: (row) => <div className="serialNoIconDiv">{row.serial}</div>,
      name: "S No",
      selector: "serial",
      sortable: true,
      width: "80px",
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
      <section className="locationSection content">
        <DataTable
          columns={columns}
          noHeader={true}
          highlightOnHover
          pagination
          paginationComponentOptions={paginationOptions}
          dense={true}
          size={10}
          customStyles={customStyles}
          theme="solarized"
          defaultSortField={"serial"}
          data={locationData}
          expandableRows
          expandableRowsComponent={<LocationDataTableExpander data={locationData} />}
        />
      </section>
    ) : (
      <section className="locationSection noData">
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
        <LoadingSpinner />
      </section>
    );
  }
}

export default LocationDataTable;
