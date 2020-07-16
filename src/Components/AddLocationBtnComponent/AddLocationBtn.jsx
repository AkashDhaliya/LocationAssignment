import React from "react";
import Form from '../FormComponent/Form';

function AddLocationBtn(props) {
  return (
    <>
    <button
      className="addLocationBtn"
      onClick={() => props.showAddUpdateForm()}
    >
      &#43; Add Location
    </button>
    <Form modal={true} />
    </>
  );
}

export default AddLocationBtn;
