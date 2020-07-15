import React from "react";

function NoData() {
  return (
    <section className="locationSection noData">
      <img
        src={require("../../Images/no_locations.jpg")}
        alt="No Locations available"
      />
    </section>
  );
}

export default NoData;
