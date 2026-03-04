const repeatString = function (name, num) {
  if (num < 0) {
    return "ERROR";
  }
  let newString = "";
  for (let i = 0; i < num; i++) {
    newString += name;
  }

  return newString;
};

// Do not edit below this line
module.exports = repeatString;
