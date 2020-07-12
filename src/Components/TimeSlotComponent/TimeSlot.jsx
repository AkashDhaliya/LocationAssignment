import React from "react";
import { Formik, Form, Field } from "formik";
import { TIME_FACILITY_INITIAL_DATA } from "../../Constants/Constant";
import * as Yup from "yup";

function TimeSlot(props) {
  function resetHandler(reset) {
    props.hideAddUpdateForm();
    props.initialData();
    reset();
  }

  function submitHandler(submit) {
    submit();
    props.hideAddUpdateForm();
  }

  return (
    <>
      <div
        className={
          props.showFacilityModal
            ? "facility-modal facility-show-modal"
            : "facility-modal"
        }
      >
        <div className="facility-modal-content">
          <h5>Facility Times</h5>
          <div className="facilityContentHeader"><span>From</span><span>To</span></div>
          {TIME_FACILITY_INITIAL_DATA.map((item) => (
            <div key={item.day} className="facilityContentDiv">
              <input type="checkbox" name={item.day} value={item.day}></input>
              <label className={"TimeSlot-label"} htmlFor={item.day}>
                {item.day}
              </label>
              <span>
                <input type="text" className={"timeFrom"}></input>
                <span>
                  <span className="AMSpan">AM</span>
                  <span className="PMSpan">PM</span>
                </span>
              </span>
              <span>
                <input type="text" className={"timeTo"}></input>
                <span>
                  <span className="AMSpan">AM</span>
                  <span className="PMSpan">PM</span>
                </span>
              </span>
              <span>
                <button className="applyToAllBtn">Apply to All Checked</button>
              </span>
            </div>
          ))}
          <div className="actionBtn">
            <button
              className="cnclBtn"
              type="button"
              onClick={props.hideFacilityModal}
            >
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeSlot;
