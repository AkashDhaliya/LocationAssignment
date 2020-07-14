import React from "react";

function AddLocationBtn(props) {
  return (
    <button
      className="addLocationBtn"
      onClick={() => props.showAddUpdateForm()}
    >
      &#43; Add Location
    </button>
  );
}

export default AddLocationBtn;
