import React, { useState } from "react";
import { TIME_FACILITY_INITIAL_DATA } from "../../Constants/Constant";


function TimeSlot(props) {

  function resetHandler() {
    props.hideFacilityModal();
    console.log(TIME_FACILITY_INITIAL_DATA);
    setFacilityData(TIME_FACILITY_INITIAL_DATA);
    setIsError(false);
  }

  // function submitHandler(submit) {
  //   submit();
  //   props.hideAddUpdateForm();
  // }

  const [facilityData, setFacilityData] = useState(TIME_FACILITY_INITIAL_DATA);
  const [isError, setIsError] = useState("");

  function detectKeyPress(e) {
    const re = /[0-9]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  function setTime(evt) {
    let time = evt.target.value;
    let timeField = evt.target.className.split(" ")[0];
    let day = evt.target.getAttribute("day");
    let error = false;
    if (time.length === 2 && evt.nativeEvent.inputType.includes("insertText")) {
      time = time + ":";
    }
    if (time.length === 5) {
      const validateTime = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
      error = !validateTime.test(time);
      
      if (!error) {
        let splittedHHMM = time.split(":");
        if (parseInt(splittedHHMM[0]) >= 12) {
          let calculateHH = parseInt(splittedHHMM[0] - 12);
          splittedHHMM[0] =
            calculateHH < 10
              ? "0" + calculateHH.toString()
              : calculateHH.toString();
          time = splittedHHMM.join(":");
        }
      }
    }
    let data = facilityData.map((item) => {
      if (item.day === day) {
        item[timeField] = time;
        item[timeField + "error"] = error;
      }
      return item;
    });
    setIsError(error);
    setFacilityData(data);
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
          <div className="facilityContentHeader">
            <span className="fromHeader">From</span>
            <span className="toHeader">To</span>
          </div>
          {facilityData.map((item) => (
            <div key={item.day} className="facilityContentDiv">
              <input type="checkbox" name={item.day} value={item.day}></input>
              <label className={"TimeSlot-label"} htmlFor={item.day}>
                {item.day}
              </label>
              <span>
                <input
                  maxLength="5"
                  id=""
                  className={
                    item.timeFromerror
                      ? "timeFrom facilityInputFromError"
                      : "timeFrom"
                  }
                  day={item.day}
                  onKeyPress={(e) => detectKeyPress(e)}
                  type="text"
                  onChange={setTime}
                  value={item.timeFrom}
                ></input>
                <span>
                  <span className="AMSpan">AM</span>
                  <span className="PMSpan">PM</span>
                </span>
              </span>
              <span>
                <input
                  maxLength="5"
                  className={
                    item.timeToerror ? "timeTo facilityInputToError" : "timeTo"
                  }
                  day={item.day}
                  onKeyPress={(e) => detectKeyPress(e)}
                  onChange={setTime}
                  type="text"
                  value={item.timeTo}
                ></input>
                <span>
                  <span className="AMSpan">AM</span>
                  <span className="PMSpan">PM</span>
                </span>
              </span>
              <span>
                <button className="applyToAllBtn">Apply to All Checked</button>
              </span>
              {(item.timeFromerror || item.timeToerror) && (
                <div className="facilityContentError">Invalid time</div>
              )}
            </div>
          ))}
          <div className="actionBtn">
            <button className="cnclBtn" type="button" onClick={resetHandler}>
              Cancel
            </button>
            <button
              className={isError ? "submitBtnDisabled" : ""}
              type="submit"
              disabled={isError}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeSlot;
