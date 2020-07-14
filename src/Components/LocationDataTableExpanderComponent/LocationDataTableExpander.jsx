import React from "react";

function facilityTimeTagFormat(data) {
  return `${data.day} ${data.timeFrom}${data.timeFromAM ? "AM" : "PM"} - ${
    data.timeTo
  }${data.timeToAM ? "AM" : "PM"}`;
}

function LocationDataTableExpander(props) {
  return (
    <ul className="tablExpander">
      <li>
        <span className="tableExpanderLable">Address Line 2</span>
        <span>:</span>
        <span className="tableExpanderContent">
          {props.data.addressLine2.length === 0 ? "NA" : props.data.addressLine2}
        </span>
      </li>
      <li>
        <span className="tableExpanderLable">City</span>
        <span>:</span>
        <span className="tableExpanderContent">
          {props.data.city.length === 0 ? "NA" : props.data.city}
        </span>
      </li>
      <li>
        <span className="tableExpanderLable">State</span>
        <span>:</span>
        <span className="tableExpanderContent">
          {props.data.state.length === 0 ? "NA" : props.data.state}
        </span>
      </li>
      <li>
        <span className="tableExpanderLable">Zip Code</span>
        <span>:</span>
        <span className="tableExpanderContent">
          {props.data.zipCode.length === 0 ? "NA" : props.data.zipCode}
        </span>
      </li>
      <li>
        <span className="tableExpanderLable">Suite No</span>
        <span>:</span>
        <span className="tableExpanderContent">
          {props.data.suiteNo.length === 0 ? "NA" : props.data.suiteNo}
        </span>
      </li>
      <li>
        <span className="tableExpanderLable">TimeZone</span>
        <span>:</span>
        <span className="tableExpanderContent">
          {props.data.timeZone.length === 0 ? "NA" : props.data.timeZone}
        </span>
      </li>
      <li>
        <span className="tableExpanderLable">Facility Time</span>
        <span>:</span>
        <span className="tableExpanderContent">
          {props.data.facilityTimes.length === 0
            ? "NA"
            : props.data.facilityTimes.map((item) => {
                return (
                  <span className="customeTags" key={item.day}>
                    {facilityTimeTagFormat(item)}
                  </span>
                );
              })}
        </span>
      </li>
      <li>
        <span className="tableExpanderLable">Appointment Pool</span>
        <span>:</span>
        <span className="tableExpanderContent">
          {props.data.appointmentPool.length === 0
            ? "NA"
            : props.data.appointmentPool.split(",").map((item) => {
                if (item.length > 0) {
                  return (
                    <span className="customeTags" key={item.trim()}>
                      {item.trim()}
                    </span>
                  );
                }
                return null;
              })}
        </span>
      </li>
    </ul>
  );
}

export default LocationDataTableExpander;
