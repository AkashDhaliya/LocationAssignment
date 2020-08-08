import React, { PureComponent } from "react";
import Modal from "../ModalComponent/Modal";
import { formFields } from "../../Utility/formData";

import {
  SpecialCharErrorMsg,
  PhoneNoErrorMsg,
  ZipCodeErrorMsg,
  CityErrorMsg,
} from "../../Constants/Constant";

class Form extends PureComponent {
  constructor(props) {
    super(props);
    const state = {};
    //Here initial state has been setting dynamically from constants
    for (let i = 0; i < formFields.length; i++) {
      state[formFields[i].fieldId] = {
        value: "",
        errorState: { error: false, message: "" },
      };
    }
    this.state = state;
  }

  handleChange = (evt) => {
    let field = evt.target.name;
    let value = evt.target.value;
    let validate = value.length === 0 ? true : this.detectInputValidation(evt);
    if (validate) {
      this.setState((prevState) => ({
        [field]: {
          ...prevState[field],
          value: value,
          errorState: {
            ...prevState[field].errorState,
            error: false,
            message: "",
          },
        },
      }));
    } else {
      var errroMessage;
      switch (evt.target.name) {
        case "locationName":
          errroMessage = SpecialCharErrorMsg;
          break;
        case "addressLine1":
          errroMessage = SpecialCharErrorMsg;
          break;
        case "phoneNo":
          errroMessage = PhoneNoErrorMsg;
          break;
        case "zipCode":
          errroMessage = ZipCodeErrorMsg;
          break;
        case "city":
          errroMessage = CityErrorMsg;
          break;

        default:
          errroMessage = "";
          break;
      }
    }
    this.setState((prevState) => ({
      [field]: {
        ...prevState[field],
        errorState: {
          ...prevState[field].errorState,
          error: true,
          message: errroMessage,
        },
      },
    }));
  };

  detectInputValidation(evt) {
    const regex = new RegExp(evt.target.attributes.regex.value);
    if (regex.test(evt.target.value)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <form>
        {formFields.map((formFields) => {
          const {
            fieldName,
            fieldId,
            fieldType,
            fieldRequired,
            fieldOptions,
            fieldRegEx,
          } = formFields;
          const { errorState } = this.state[fieldId];
          switch (fieldType) {
            case "text":
              return (
                <div key={fieldId} className={fieldId}>
                  <label
                    htmlFor={fieldId}
                    required={fieldRequired}
                    className="addUpdateLocationLabel"
                  >
                    {fieldName}
                  </label>
                  <input
                    type="text"
                    name={fieldId}
                    autoComplete="off"
                    value={this.state[fieldId].value}
                    onChange={this.handleChange}
                    className="addUpdateLocationInput"
                    regex={fieldRegEx}
                  ></input>
                  {errorState.error && (
                    <div className="errorMsg">{errorState.message}</div>
                  )}
                </div>
              );
            case "select":
              return (
                <div key={fieldId} className={fieldId}>
                  <label
                    className="addUpdateLocationLabel"
                    required={fieldRequired}
                    htmlFor={fieldId}
                  >
                    {fieldName}
                  </label>
                  <select
                    type="text"
                    name={fieldId}
                    isrequired={fieldRequired}
                    value={this.state[fieldId].value}
                    onChange={this.handleChange}
                    className="addUpdateLocationInput"
                  >
                    <option value="">Select</option>
                    {fieldOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              );
            default:
              return null;
          }
          return null;
        })}
        <div className="actionBtn">
          <button className="cnclBtn" type="button">
            Cancel
          </button>
          <button type="submit" disabled={true}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Modal(Form);
