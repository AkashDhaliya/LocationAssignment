import React from "react";

function TimeSlot(props) {

  return (
    <>
      <div className={props.showFacilityModal ? "modal show-modal" : "modal"}>
        <div className="modal-content">
          <h5>Facility Times</h5>

        </div>
      </div>
    </>
  );
}

export default TimeSlot;
