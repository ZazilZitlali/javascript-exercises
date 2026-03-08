const findTheOldest = function (arr) {
  let year = new Date().getFullYear();

  let oldest = arr.sort((a, b) => {
    if (a.yearOfDeath === undefined) {
      a.yearOfDeath = year;
    } else if (b.yearOfDeath === undefined) {
      b.yearOfDeath = year;
    }
    return b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth)
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
