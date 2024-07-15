const convertToCelsius = function (fahrenheit) {

  let result = (fahrenheit - 32) * 5 / 9;
  if (String(result).includes(".")) {
    return Number(result.toFixed(1));
  }
  else {
    return Number(result)
  }
};

const convertToFahrenheit = function (celsius) {
  let result = celsius * 9 / 5 + 32;

  if (String(result).includes(".")) {
    return Number(result.toFixed(1));
  }
  else {
    return Number(result)
  }
};

convertToCelsius(100);
convertToFahrenheit(2.2);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
