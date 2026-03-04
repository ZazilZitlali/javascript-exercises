const convertToCelsius = function(num) {
  num = (num - 32) * (5 / 9);

  if (num === Math.floor(num)){
    return num - 0;
  }
  return num.toFixed(1) - 0;
};

const convertToFahrenheit = function(num) {
  num = num * 1.8 + 32;

  if (num === Math.floor(num)){
    return num - 0;
  }
  return num.toFixed(1) - 0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
