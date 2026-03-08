const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length === 0){
    return 0;
  } else if (array.length === 1){
    return array[0];
  }
	return array.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => {
    return total * current;
  }, 1)
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a === 0){
    return 1;
  }
	let total = 1;
  for (; a > 0; a--){
    total *= a;
  };

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
