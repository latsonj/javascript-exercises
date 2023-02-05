const repeatString = function(string, num) {
  if (num < 0) {
    let negative = string.replace(string, "ERROR");
    return negative;
  } else if (num === 0) {
    let zeroString = "";
    return zeroString;
  } else {
    let result = string;
    for (let i = 1; i < num; i++) {
      result += string;
    }
    return result;
  }
}

// Do not edit below this line
 module.exports = repeatString;
