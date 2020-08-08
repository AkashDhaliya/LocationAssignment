export const formFields = [
  {
    fieldName: "First Name",
    fieldId: "firstName",
    fieldType: "text",
    fieldRequired: true,
    fieldRegEx: "^[a-zA-Z]+$",
    readOnly:false
  },
  {
    fieldName: "Last Name",
    fieldId: "lastName",
    fieldType: "text",
    fieldRequired: true,
    fieldRegEx: "^[a-zA-Z]+$",
    readOnly:false
  },
  {
    fieldName: "Address",
    fieldId: "suiteNo",
    fieldType: "textArea",
    fieldRequired: true,
    fieldRegEx: "^[a-zA-Z0-9, .]+$",
    readOnly:false
  },
  {
    fieldName: "Country",
    fieldId: "country",
    fieldType: "select",
    fieldRequired: true,
    filedOptions: ["US", "UK", "CA", "NZ", "AU"],
    fieldRegEx: "",
    readOnly:false
  },
  {
    fieldName: "Pincode",
    fieldId: "pinCode",
    fieldType: "text",
    fieldRequired: true,
    fieldRegEx: "^[0-9]+$",
    readOnly:false
  },
  {
    fieldName: "State",
    fieldId: "state",
    fieldType: "text",
    fieldRequired: true,
    fieldRegEx: "",
    readOnly:true
  },
];
