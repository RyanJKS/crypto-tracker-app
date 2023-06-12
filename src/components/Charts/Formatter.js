export function LineChartDataFormat(arr, input) {
  // Find the data object with the key equal to the input
  const selectedData = arr.find((obj) => Object.keys(obj)[0] === input);

  if (!selectedData) {
    // Return an empty array if no matching data object found
    return [];
  }

  // Extract the prices array from the selected data object
  const prices = Object.values(selectedData)[0].prices;

  // Format the data into an array of arrays with [x, y] format
  const formattedData = prices.map(([time, price]) => [
    new Date(time).getTime(),
    price,
  ]);

  return formattedData;
}

export function CandleChartDataFormat(arr, input) {
  // Find the data object with the key equal to the input
  const selectedData = arr.find((obj) => Object.keys(obj)[0] === input);

  if (!selectedData) {
    // Return an empty array if no matching data object found
    return [];
  }

  // Extract the data array from the selected data object
  const data = Object.values(selectedData)[0];

  // Format the data into an array of objects with "x" and "y" properties
  const formattedData = data.map(([time, open, high, low, close]) => ({
    x: new Date(time).getTime(),
    y: [open, high, low, close],
  }));

  return formattedData;
}
