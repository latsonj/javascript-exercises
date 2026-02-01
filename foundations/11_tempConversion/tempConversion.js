const convertToCelsius = function(cValue) {
  let cConversion = (cValue - 32) * (5 / 9);
  let finalValue = Math.round(cConversion * 10) / 10;
  return finalValue;
};

const convertToFahrenheit = function(fValue) {
  let fConversion = fValue * (9 / 5) + 32 ;
  let finalValue = Math.round(fConversion * 10) / 10;
  return finalValue;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
