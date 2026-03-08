const fibonacci = function (nth) {
  if (nth < 0) {
    return "OOPS";
  }

  let fib = [0, 1];

  for (let i = 2; i <= nth; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
  return fib[nth];
};

// Do not edit below this line
module.exports = fibonacci;
