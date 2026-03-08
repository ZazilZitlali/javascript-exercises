const palindromes = function (string) {
  let split = string.split("");
  let lowerCase = split
    .filter((str) => /^[a-z0-9]+$/i.test(str))
    .map((char) => char.toLowerCase())
    .join("");

  let lastChar = lowerCase.length - 1;
  let first =
    lowerCase.charAt(0).toLowerCase() ===
    lowerCase.charAt(lastChar).toLowerCase();
  let second =
    lowerCase.charAt(1).toLowerCase() ===
    lowerCase.charAt(lastChar - 1).toLowerCase();
  let third =
    lowerCase.charAt(2).toLowerCase() ===
    lowerCase.charAt(lastChar - 2).toLowerCase();

  return first && second && third;
};

// Do not edit below this line
module.exports = palindromes;
