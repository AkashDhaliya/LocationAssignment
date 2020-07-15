import React from "react";

function ErrorMessage(props) {
  return (
    <section className="locationSection">
        <p> {props.ErrorMessage}</p>
      </section>
  );
}

export default ErrorMessage;
