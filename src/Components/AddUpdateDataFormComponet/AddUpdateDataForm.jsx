import React from "react";
import { formFields } from "../../Utility/formFields";
import { useIndexedDB } from "react-indexed-db";

function AddUpdateDataForm(props) {
  const { add, update } = useIndexedDB("locations");

  function submitHandler() {
    props.hideAddUpdateForm();
  }

  function resetHandler() {
    props.hideAddUpdateForm();
    props.initialData();
  }

  function handleChange() {}

  return (
    <>
      <div className={props.showAddUpdateForm ? "modal show-modal" : "modal"}>
        <div className="modal-content">
          <h5>Add Data</h5>
          {formFields.map((field) => {
            const {
              fieldName,
              fieldId,
              readOnly,
              filedOptions,
              fieldType,
              fieldRegEx,
              fieldRequired,
            } = field;
            switch (fieldType) {
              case "text":
                return (
                  <div key={fieldId}>
                    <label
                      className={fieldId}
                      required={fieldRequired}
                      htmlFor={fieldId}
                    >
                      {fieldName}
                    </label>
                    <input
                      type="text"
                      className="addUpdateLocationInput"
                      name={fieldId}
                      regex={fieldRegEx}
                      readOnly={readOnly}
                      onChange={handleChange}
                    />
                  </div>
                );

              case "select":
                return (
                  <div key={fieldId}>
                    <label
                      className={fieldId}
                      required={fieldRequired}
                      htmlFor={fieldId}
                    >
                      {fieldName}
                    </label>
                    <select name={fieldId} onChange={handleChange}>
                      <option value="">Select</option>
                      {filedOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              default:
                return null;
            }
          })}
          <div className="actionBtn">
            <button className="cnclBtn" type="button" onClick={resetHandler}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUpdateDataForm;
