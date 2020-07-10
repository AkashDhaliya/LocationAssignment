import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function AddLocationData(props) {
  return (
    <>
      <div className={props.showModal ? "modal show-modal" : "modal"}>
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
            onSubmit={async (values) => {
            //   await new Promise((resolve) => setTimeout(resolve, 500));
              //alert(JSON.stringify(values, null, 2));
              props.hideModal();
            }}
            // validationSchema={Yup.object().shape({
              
            // })}
          >
            {({
              values,
              errors,
              dirty,
              handleChange,
              handleSubmit,
              handleReset,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="locationName">
                  <label required htmlFor="locationName">
                    Location Name
                  </label>
                  <input
                    type="text"
                    name="locationName"
                    onChange={handleChange}
                    value={values.locationName}
                  />
                </div>

                <div>
                  <div className="addressLine1">
                    <label required htmlFor="addressLine1">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      name="addressLine1"
                      onChange={handleChange}
                      value={values.addressLine1}
                    />
                  </div>

                  <div className="suiteNo">
                    <label htmlFor="suiteNo">Suite No.</label>
                    <input
                      type="text"
                      name="suiteNo"
                      onChange={handleChange}
                      value={values.suiteNo}
                    />
                  </div>
                </div>
                <div>
                  <div className="addressLine2">
                    <label htmlFor="addressLine2">Address Line 2</label>
                    <input
                      type="text"
                      name="addressLine2"
                      onChange={handleChange}
                      value={values.addressLine2}
                    />
                  </div>
                  <div className="city">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      onChange={handleChange}
                      value={values.city}
                    />
                  </div>
                  <div className="state">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      name="state"
                      onChange={handleChange}
                      value={values.state}
                    />
                  </div>
                </div>

                <div>
                  <div className="zipCode">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      onChange={handleChange}
                      value={values.zipCode}
                    />
                  </div>
                  <div className="phoneNo">
                    <label required htmlFor="phoneNo">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNo"
                      onChange={handleChange}
                      value={values.phoneNumber}
                    />
                  </div>
                  <div className="timeZone">
                    <label htmlFor="timeZone">Time Zone</label>
                    <input
                      type="text"
                      name="timeZone"
                      onChange={handleChange}
                      value={values.timeZone}
                    />
                  </div>
                </div>

                <div>
                  <div className="facilityTimes">
                    <label htmlFor="facilityTimes">Facility Times</label>
                    <input
                      type="text"
                      name="facilityTimes"
                      onChange={handleChange}
                      value={values.facilityTimes}
                    />
                  </div>
                  <div className="appointmentPool">
                    <label htmlFor="appointmentPool">Appointment Pool</label>
                    <input
                      type="text"
                      name="appointmentPool"
                      onChange={handleChange}
                      value={values.appointmentPool}
                    />
                  </div>
                </div>

                <div className="actionBtn">
                  <button type="cancel" onClick={handleReset} disabled={!dirty || isSubmitting}>
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default AddLocationData;
