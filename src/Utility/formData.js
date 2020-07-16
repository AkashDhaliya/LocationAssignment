import {stateList} from "./stateList";
import {timeZoneList} from "./timeZoneList";

export const formFields = [
    {
      fieldName: 'Location Name',
      fieldId: 'locationName',
      fieldType: 'text',
      fieldRequired: true,
      fieldRegEx: "^[a-zA-Z0-9,_ -]+$",
    },
    {
      fieldName: 'Address 1',
      fieldId: 'addressLine1',
      fieldType: 'text',
      fieldRequired: true,
      fieldRegEx: "^[a-zA-Z0-9,_ -]+$",
    },
    {
      fieldName: 'Suite No.',
      fieldId: 'suiteNo',
      fieldType: 'text',
      fieldRegEx: "",
    },
    {
      fieldName: 'Address 2',
      fieldId: 'addressLine2',
      fieldType: 'text',
      fieldRegEx: "",
    },
    {
      fieldName: 'City',
      fieldId: 'city',
      fieldType: 'text',
      fieldRegEx: "^[a-zA-Z ]+$",
    },
    {
      fieldName: 'State',
      fieldId: 'state',
      fieldType: 'select',
      fieldOptions: stateList,
      fieldRegEx: "",
    },
    {
      fieldName: 'Zip Code',
      fieldId: 'zipCode',
      fieldType: 'text',
      fieldRegEx: "^[0-9]+$",
    },
    {
      fieldName: 'Phone No.',
      fieldId: 'phoneNo',
      fieldType: 'text',
      fieldRequired: true,
      fieldRegEx: "^[0-9]+$",
    },
    {
      fieldName: 'Time Zone',
      fieldId: 'timeZone',
      fieldType: 'select',
      fieldOptions: timeZoneList,
      fieldRegEx: "",
    },
    {
      fieldName: 'Facility Times',
      fieldId: 'facilityTimes',
      fieldType: 'text',
      fieldRegEx: "",
    },
    {
      fieldName: 'Appointment Pool',
      fieldId: 'appointmentPool',
      fieldType: 'text',
      fieldRegEx: "",
    }];