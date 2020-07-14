import React, { useState } from "react";
import { TIME_FACILITY_INITIAL_DATA } from "../../Constants/Constant";
import { useEffect } from "react";

function TimeSlot(props) {
  const [facilityData, setFacilityData] = useState(TIME_FACILITY_INITIAL_DATA);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setExistingValues();
  }, [props.showFacilityModal,props.hideFacilityModal]);

  function setExistingValues() {
    if (props.facilityData.length !== 0) {
      props.facilityData.forEach((propData) => {
        facilityData.forEach((item) => {
          if (item.day === propData.day) {
            item.day = propData.day;
            item.checked = propData.checked;
            item.timeFrom = propData.timeFrom;
            item.timeFromAM = propData.timeFromAM;
            item.timeFromPM = propData.timeFromPM;
            item.timeTo = propData.timeTo;
            item.timeToAM = propData.timeToAM;
            item.timeToPM = propData.timeToPM;
            item.timeFromerror = propData.timeFromerror;
            item.timeToerror = propData.timeToerror;
          }
        });
      });
      setFacilityData(facilityData);
    }else{
      setFacilityData(resetFacilityData());
    }
  }

  function resetHandler() {
    props.hideFacilityModal();
    setFacilityData(resetFacilityData());
    setIsError(false);
  }

  function resetFacilityData(){
    let data = TIME_FACILITY_INITIAL_DATA.map((item) => {
      let data = {
        day: item.day,
        checked: false,
        timeFrom: "",
        timeFromAM: false,
        timeFromPM: false,
        timeTo: "",
        timeToAM: false,
        timeToPM: false,
        timeFromerror: false,
        timeToerror: false,
      };
      return data;
    });
    return data;
  }

  function submitHandler() {
    let checkedData = facilityData.filter(
      (item) =>
        item.checked && item.timeFrom.length === 5 && item.timeTo.length === 5
    );
    props.updateFacilityFormData(checkedData.length > 0 ? checkedData : []);
    props.hideFacilityModal();
  }

  function detectKeyPress(e) {
    const re = /[0-9]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  function checkedhandler(evt) {
    let day = evt.target.name;
    let data = facilityData.map((item) => {
      if (item.day === day) {
        item.checked = evt.target.checked;
      }
      return item;
    });
    setFacilityData(data);
  }

  function applyToAllHandler(evt) {
    let day = evt.target.name;
    let selectedData = facilityData.filter(
      (item) =>
        item.day === day &&
        item.timeFrom.length !== 0 &&
        item.timeTo.length !== 0
    );
    if (selectedData.length !== 0) {
      let data = facilityData.map((item) => {
        if (item.checked) {
          let data = {
            day: item.day,
            checked: true,
            timeFrom: selectedData[0].timeFrom,
            timeFromAM: selectedData[0].timeFromAM,
            timeFromPM: selectedData[0].timeFromPM,
            timeTo: selectedData[0].timeTo,
            timeToAM: selectedData[0].timeToAM,
            timeToPM: selectedData[0].timeToPM,
            timeFromerror: selectedData[0].timeFromerror,
            timeToerror: selectedData[0].timeToerror,
          };
          return data;
        }
        return item;
      });
      setFacilityData(data);
    }
    evt.preventDefault();
  }

  function setTime(evt) {
    let time = evt.target.value;
    let splittedHHMM = time.split(":");
    let timeField = evt.target.className.split(" ")[0];
    let day = evt.target.getAttribute("day");
    let error = false;
    let AM = false;
    let PM = false;
    if (time.length === 2 && evt.nativeEvent.inputType.includes("insertText")) {
      time = time + ":";
    }
    if (
      (time.length === 3 || time.length === 4) &&
      splittedHHMM[0].length < 2
    ) {
      time =
        splittedHHMM[0].length === 0
          ? "00:" + splittedHHMM[1]
          : "0" + splittedHHMM[0] + ":" + splittedHHMM[1];
    }
    if (time.length === 5) {
      const validateTime = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
      error = !validateTime.test(time);

      if (!error) {
        AM = parseInt(splittedHHMM[0]) < 12 ? true : false;
        PM = parseInt(splittedHHMM[0]) >= 12 ? true : false;
        if (parseInt(splittedHHMM[0]) > 12) {
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
        item[timeField + "AM"] = AM;
        item[timeField + "PM"] = PM;
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
            item.timeFrom!==undefined &&
            <div key={item.day} className="facilityContentDiv">
              <input
                type="checkbox"
                name={item.day}
                checked={item.checked}
                onChange={checkedhandler}
                value={item.day}
              ></input>
              <label className={"TimeSlot-label"} htmlFor={item.day}>
                {item.day}
              </label>
              <span>
                <input
                  maxLength="5"
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
                  <span
                    className={
                      item.timeFromAM ? "AMSpan activeAMPMSpan" : "AMSpan"
                    }
                  >
                    AM
                  </span>
                  <span
                    className={
                      item.timeFromPM ? "PMSpan activeAMPMSpan" : "PMSpan"
                    }
                  >
                    PM
                  </span>
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
                  <span
                    className={
                      item.timeToAM ? "AMSpan activeAMPMSpan" : "AMSpan"
                    }
                  >
                    AM
                  </span>
                  <span
                    className={
                      item.timeToPM ? "PMSpan activeAMPMSpan" : "PMSpan"
                    }
                  >
                    PM
                  </span>
                </span>
              </span>
              <span>
                <button
                  disabled={isError}
                  className={
                    isError ? "btnDisabled applyToAllBtn" : "applyToAllBtn"
                  }
                  name={item.day}
                  onClick={applyToAllHandler}
                >
                  Apply to All Checked
                </button>
              </span>
            </div>
          ))}
          {isError && <div className="facilityContentError">Invalid time</div>}
          <div className="actionBtn">
            <button className="cnclBtn" type="button" onClick={resetHandler}>
              Cancel
            </button>
            <button
              className={isError ? "btnDisabled saveTimeBtn" : "saveTimeBtn"}
              type="button"
              onClick={submitHandler}
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
