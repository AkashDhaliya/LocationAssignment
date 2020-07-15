import React from "react";
import {TIME_FORMATTER} from '../../Utility/Utility'

const ExpanderTableKeys = {
  addressLine2: "Address Line 2",
  suiteNo: "Suite No",
  city: "City",
  state: "State",
  zipCode: "Zip Code",
  timeZone: "TimeZone",
  facilityTimes: "Facility Time",
  appointmentPool: "Appointment Pool",
};

function LocationDataTableExpander(props) {
  return (
    <ul className="tablExpander">
      {Object.entries(props.data).map((item) => {
        if (ExpanderTableKeys[item[0]] !== undefined) {
          return (
            <li key={item[0]}>
              <span className="tableExpanderLable">
                {ExpanderTableKeys[item[0]]}
              </span>
              <span>:</span>
              <span className="tableExpanderContent">
                {item[1].length === 0
                  ? "NA"
                  : Array.isArray(item[1])
                  ? item[1].map((item) => {
                      return (
                        <span className="customeTags" key={item.day}>
                          {TIME_FORMATTER(item)}
                        </span>
                      );
                    })
                  : item[0] !== "appointmentPool"
                  ? item[1]
                  : item[1].split(",").map((item) => {
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
          );
        }
        return null;
      })}
    </ul>
  );
}

export default LocationDataTableExpander;
