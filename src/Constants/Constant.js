export const INITIALDATA = {
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
};

export const STATELIST = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

export const TIME_ZONE_LIST = [
  "(GMT -12:00) Eniwetok, Kwajalein",
  "(GMT -11:00) Midway Island, Samoa",
  "(GMT -10:00) Hawaii",
  "(GMT -9:00) Alaska",
  "(GMT -8:00) Pacific Time (US & Canada)",
  "(GMT -7:00) Mountain Time (US & Canada)",
  "(GMT -6:00) Central Time (US & Canada), Mexico City",
  "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima",
  "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz",
  "(GMT -3:30) Newfoundland",
  "(GMT -3:00) Brazil, Buenos Aires, Georgetown",
  "(GMT -2:00) Mid-Atlantic",
  "(GMT -1:00) Azores, Cape Verde Islands",
  "(GMT) Western Europe Time, London, Lisbon, Casablanca",
  "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris",
  "(GMT +2:00) Kaliningrad, South Africa",
  "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg",
  "(GMT +3:30) Tehran",
  "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi",
  "(GMT +4:30) Kabul",
  "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent",
  "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi",
  "(GMT +5:45) Kathmandu",
  "(GMT +6:00) Almaty, Dhaka, Colombo",
  "(GMT +7:00) Bangkok, Hanoi, Jakarta",
  "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong",
  "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
  "(GMT +9:30) Adelaide, Darwin",
  "(GMT +10:00) Eastern Australia, Guam, Vladivostok",
  "(GMT +11:00) Magadan, Solomon Islands, New Caledonia",
  "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka",
];

export const GET_ERROR_MSG =
  "Oops..Seems like some error occurred while loading the data. Please refresh the page or try after some time.";
  export const ADD_ERROR_MSG = "Error while adding location, Please try again!";
export const UPDATE_ERROR_MSG = "Error while updating location, Please try again!";
export const DELETE_ERROR_MSG = "Error while deleting location, Please try again!";

export const SPECIAL_CHAR_ERROR_MSG =
  "Special Characters are not allowed excluding  [ _ - , ]";

export const ZIP_CODE_ERROR_MSG = "Only alphanumeric values allowed";
export const PHONE_NO_ERROR_MSG = "Only number allowed";
export const CITY_ERROR_MSG = "Only characters allowed from A-Z";


export const customStyles = {
  table: {
    style: {
      backgroundColor: "#f0f1f3",
    },
  },
  headRow: {
    style: {
      border: "1px solid transparent",
      borderRadius: "40px",
      marginBottom: "7px",
    },
  },
  headCells: {
    style: {
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
  rows: {
    style: {
      border: "1px solid transparent",
      borderRadius: "40px",
      marginBottom: "7px",
      color: "#878c92",
      fontSize: "12px",
      fontWeight:"500",
      boxShadow: "0px 0px 8px 0px #dedede",

      "&:hover": {
        color: "#878c92",
        backgroundColor: "#fff!important",
        outline: "none!important",
      },

      "&:not(:last-of-type)": {
        border: "1px solid transparent",
      },
    },
  },
  pagination: {
    style: {
      justifyContent: "center",
      fontSize: "12px",
      border: "1px solid transparent",
      borderRadius: "40px",
      minHeight: "40px",
      marginBottom: "7px",
    },
    pageButtonsStyle: {
      color: "green",
    },
  },
};
