const sumAll = function(num1, num2) {

  if ((num1 < 0 || num2 < 0) || (typeof num1 !== "number") || (typeof num2 !== "number")) {
    return "ERROR";

  } else if (num1 > num2) {
    let finalSum = num2;
    for (let i = num2; i < num1; i++) {
      finalSum += i + 1;
  }
  return finalSum;

  } else if (num1 < num2 ) {
    let finalSum = num1;
    for (let i = num1; i < num2; i++) {
        finalSum += i + 1;
  }
  return finalSum;
  };
}

// Do not edit below this line
module.exports = sumAll;
