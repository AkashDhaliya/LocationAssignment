import React from "react";
import { Formik } from "formik";

function AddLocationData(props) {
  return (
    <>
      <div className={props.visibility ? "modal show-modal" : "modal"}>
        <div className="modal-content">
          <h5>Add Locations</h5>
          <Formik
            initialValues={{
              locationName: "",
              addressLine1: "",
              suiteNo: "",
              addressLine2: "",
              city: "",
              state: "",
              zipCode: "",
              phoneNumber: "",
              timeZone: "",
              facilityTimes: "",
              appointmentPool: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="locationName">Location Name</label>
                  <input
                    type="text"
                    name="locationName"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email}
                </div>

                <div>
                  <div className="addressLine1">
                    <label htmlFor="addressLine1">Address Line 1</label>
                    <input
                      type="text"
                      name="locationName"
                      onChange={handleChange}
                      value={values.email}
                    />
                  </div>
                  {errors.email}
                  <div className="suiteNo">
                    <label htmlFor="suiteNo">Suite No.</label>
                    <input
                      type="text"
                      name="suiteNo"
                      onChange={handleChange}
                      value={values.email}
                    />
                  </div>
                  {errors.email}
                </div>
                <div>
                  <div className="addressLine2">
                    <label htmlFor="addressLine2">Address Line 2</label>
                    <input
                      type="text"
                      name="addressLine2"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email}
                  </div>
                  <div className="city">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email}
                  </div>
                  <div className="state">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      name="state"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email}
                  </div>
                </div>

                <div>
                  <div className="zipCode">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email}
                  </div>
                  <div className="phoneNo">
                    <label htmlFor="phoneNo">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNo"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email}
                  </div>
                  <div className="timeZone">
                    <label htmlFor="timeZone">Time Zone</label>
                    <input
                      type="text"
                      name="timeZone"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email}
                  </div>
                </div>

                <div>
                  <div className="facilityTimes">
                    <label htmlFor="facilityTimes">Facility Times</label>
                    <input
                      type="text"
                      name="facilityTimes"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email}
                  </div>
                  <div className="appointmentPool">
                    <label htmlFor="appointmentPool">Appointment Pool</label>
                    <input
                      type="text"
                      name="appointmentPool"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email}
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default AddLocationData;
