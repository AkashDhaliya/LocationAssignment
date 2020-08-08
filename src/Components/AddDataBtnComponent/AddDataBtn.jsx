import React from "react";

function AddDataBtn(props) {
  return (
    <>
    <button
      className="addDataBtn"
      onClick={() => props.showAddUpdateForm()}
    >
      &#43; Add Data
    </button>
    </>
  );
}

export default AddDataBtn;
