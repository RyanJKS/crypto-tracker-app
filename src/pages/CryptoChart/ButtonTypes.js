export const buttonTimeStamps = [
  { label: "1", value: "1" },
  { label: "7", value: "7" },
  { label: "30", value: "30" },
  { label: "365", value: "365" },
  // Add more buttons here if needed
];

export const buttonChartTypes = [
  { label: "Line", value: "Line" },
  { label: "Candlestick", value: "Candlestick" },
];

function retrieveTimeStampsFromButtons(arr, key) {
  return arr.map((obj) => obj[key]).filter((value) => value !== undefined);
}

export const Times = retrieveTimeStampsFromButtons(buttonTimeStamps, "label");
