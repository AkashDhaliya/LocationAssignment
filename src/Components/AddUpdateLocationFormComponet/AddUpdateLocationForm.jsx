import React from "react";
import { Formik, Form, Field } from "formik";
import { useIndexedDB } from "react-indexed-db";
//import TimeSlot from "../TimeSlotComponent/TimeSlot"; //showFacilityModal
import * as Yup from "yup";
import {
  STATELIST,
  SPECIAL_CHAR_ERROR_MSG,
  TIME_ZONE_LIST,
  ZIP_CODE_ERROR_MSG,
  PHONE_NO_ERROR_MSG,
  CITY_ERROR_MSG,
} from "../../Constants/Constant";

function AddUpdateLocationForm(props) {
  const { add, update } = useIndexedDB("locations");
  //const [facilityModal, setFacilityModal] = useState(false);

  function resetHandler(reset) {
    props.hideAddUpdateForm();
    props.initialData();
    reset();
  }

  function submitHandler(submit) {
    submit();
    props.hideAddUpdateForm();
  }

  return (
    <>
      <div className={props.showAddUpdateForm ? "modal show-modal" : "modal"}>
        <div className="modal-content">
          <h5>Add Locations</h5>
          <Formik
            enableReinitialize={true}
            initialValues={props.formData}
            onSubmit={async (values, { resetForm }) => {
              let mode = values.id === undefined ? add : update;
               await mode(values).then(
                (event) => {
                  console.log("ID Generated: ", event);
                },
                (error) => {
                  console.log(error);
                }
              );
              resetForm({});
            }}

            validationSchema={Yup.object().shape({
              locationName: Yup.string()
                .required("Required")
                .matches(/^[a-zA-Z0-9,_ -]+$/, SPECIAL_CHAR_ERROR_MSG),
              addressLine1: Yup.string()
                .required("Required")
                .matches(/^[a-zA-Z0-9,_ -]+$/, SPECIAL_CHAR_ERROR_MSG),
              phoneNo: Yup.string()
                .required("Required")
                .matches(/^[0-9]+$/, PHONE_NO_ERROR_MSG),
              city: Yup.string().matches(/^[a-zA-Z ]+$/, CITY_ERROR_MSG),
              zipCode: Yup.string()
                .min(5, "Too Short!")
                .max(10, "Too Long!")
                .matches(/^[a-zA-Z0-9]+$/, ZIP_CODE_ERROR_MSG),
            })}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              handleReset,
              isValid
            }) => (
              <Form onSubmit={submitHandler.bind(null, handleSubmit)}>
                <div className="locationName">
                  <label required htmlFor="locationName">
                    Location Name
                  </label>
                  <Field
                    type="text"
                    name="locationName"
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
                    {errors.zipCode && (
                      <div className="errorMsg">{errors.zipCode}</div>
                    )}
                  </div>
                  <div className="phoneNo">
                    <label required htmlFor="phoneNo">
                      Phone Number
                    </label>
                    <Field
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
                      // onClick={() => setFacilityModal(true)}
                      onChange={handleChange}
                      value={values.facilityTimes}
                    />
                    {/* <TimeSlot
                      showFacilityModal={facilityModal}
                      hideFacilityModal={() => setFacilityModal(false)}
                    /> */}
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
                  <button type="submit" disabled={!isValid}>
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

export default AddUpdateLocationForm;
