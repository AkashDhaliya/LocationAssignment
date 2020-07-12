import React from "react";

function AddLocation(props) {
  return (
    <button
      className="addLocationBtn"
      onClick={() => props.showAddUpdateForm()}
    >
      &#43; Add Location
    </button>
  );
}

export default AddLocation;
