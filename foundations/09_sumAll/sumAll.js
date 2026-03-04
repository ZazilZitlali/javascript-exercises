const sumAll = function (num, num2) {
  if (!Number.isInteger(num) || !Number.isInteger(num2)) {
    return "ERROR";
  }

  if (num <= 0 || num2 <= 0) {
    return "ERROR";
  }

  let sum = 0;
  if (num < num2) {
    for (let i = num; i <= num2; i++) {
      sum += i;
    }
  } else {
    for (let i = num2; i <= num; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
