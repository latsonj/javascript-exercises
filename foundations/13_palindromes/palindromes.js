const palindromes = function (str) {
  let comparisonString = str.replaceAll(" ", "").replaceAll("!", "").replaceAll(",", "").replaceAll(".", "").toLowerCase();
  let reverseString = comparisonString.split("").reverse().join("");
  
  if (comparisonString === reverseString) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
