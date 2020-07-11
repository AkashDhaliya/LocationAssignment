import React from "react";
import { Formik, Form, Field } from "formik";
import { useIndexedDB } from "react-indexed-db";
import {
  STATELIST,
  SPECIAL_CHAR_ERROR_MSG,
  TIME_ZONE_LIST,
} from "../../Constants/Constant";
import * as Yup from "yup";

function AddLocationData(props) {
  const { add } = useIndexedDB("locations");

  function resetHandler(reset) {
    props.hideModal();
    reset();
  }

  function submitHandler(submit) {
    submit();
    props.hideModal();
  }

  function validateLocation(value) {
    let error;
    if (/[!$%^&*()+|~=`{}[:;<>?.@#\]]/g.test(value)) {
      error = SPECIAL_CHAR_ERROR_MSG;
    }
    return error;
  }

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
              phoneNo: "",
              timeZone: "",
              facilityTimes: "",
              appointmentPool: "",
            }}
            onSubmit={async (values, { resetForm }) => {
              //   add(values).then(
              //     (event) => {
              //       console.log("ID Generated: ", event);
              //     },
              //     (error) => {
              //       console.log(error);
              //     }
              //   );
              resetForm({});
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object().shape({
              locationName: Yup.string().required("Required"),
              addressLine1: Yup.string().required("Required"),
              phoneNo: Yup.string().required("Required"),
            })}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              handleReset,
              isSubmitting,
            }) => (
              //   <Form onSubmit={submitHandler.bind(null, handleSubmit)}>
              <Form onSubmit={handleSubmit}>
                <div className="locationName">
                  <label required htmlFor="locationName">
                    Location Name
                  </label>
                  <Field
                    type="text"
                    name="locationName"
                    validate={validateLocation}
                    onChange={handleChange}
                    value={values.locationName}
                  />
                  {errors.locationName && (
                    <div className="errorMsg">{errors.locationName}</div>
                  )}
                </div>

                <div>
                  <div className="addressLine1">
                    <label required htmlFor="addressLine1">
                      Address Line 1
                    </label>
                    <Field
                      type="text"
                      name="addressLine1"
                      validate={validateLocation}
                      onChange={handleChange}
                      value={values.addressLine1}
                    />
                    {errors.addressLine1 && (
                      <div className="errorMsg">{errors.addressLine1}</div>
                    )}
                  </div>

                  <div className="suiteNo">
                    <label htmlFor="suiteNo">Suite No.</label>
                    <Field
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
                    <Field
                      type="text"
                      name="addressLine2"
                      onChange={handleChange}
                      value={values.addressLine2}
                    />
                  </div>
                  <div className="city">
                    <label htmlFor="city">City</label>
                    <Field
                      type="text"
                      name="city"
                      validate={validateLocation}
                      onChange={handleChange}
                      value={values.city}
                    />
                    <div className="errorMsg">{errors.city}</div>
                  </div>
                  <div className="state">
                    <label htmlFor="state">State</label>
                    <select
                      name="state"
                      onChange={handleChange}
                      value={values.state}
                      id="stateDropdwn"
                    >
                      <option value="">Select</option>
                      {STATELIST.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <div className="zipCode">
                    <label htmlFor="zipCode">Zip Code</label>
                    <Field
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
                    <Field
                      type="text"
                      name="phoneNo"
                      onChange={handleChange}
                      value={values.phoneNo}
                    />
                    {errors.phoneNo && (
                      <div className="errorMsg">{errors.phoneNo}</div>
                    )}
                  </div>
                  <div className="timeZone">
                    <label htmlFor="timeZone">Time Zone</label>

                    <select
                      name="timeZone"
                      onChange={handleChange}
                      value={values.timeZone}
                    >
                      <option value="">Select</option>
                      {TIME_ZONE_LIST.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <div className="facilityTimes">
                    <label htmlFor="facilityTimes">Facility Times</label>
                    <Field
                      type="text"
                      name="facilityTimes"
                      onChange={handleChange}
                      value={values.facilityTimes}
                    />
                  </div>
                  <div className="appointmentPool">
                    <label htmlFor="appointmentPool">Appointment Pool</label>
                    <Field
                      type="text"
                      name="appointmentPool"
                      onChange={handleChange}
                      value={values.appointmentPool}
                    />
                  </div>
                </div>
                <div className="actionBtn">
                  <button
                    className="cnclBtn"
                    type="button"
                    onClick={resetHandler.bind(null, handleReset)}
                  >
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
