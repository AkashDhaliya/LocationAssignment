export const TIME_FORMATTER = (time) => {
  return `${time.day} ${time.timeFrom}${time.timeFromAM ? "AM" : "PM"} - ${
    time.timeTo
  }${time.timeToAM ? "AM" : "PM"}`;
};
