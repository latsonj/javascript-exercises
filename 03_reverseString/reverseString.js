const reverseString = function(string) {
  const textArr = string.split("");
  const reversedArr = textArr.reverse();

  let arrToText = "";

  for (let i = 0; i <= (reversedArr.length - 1); i++) {
    arrToText += reversedArr[i];
  }
    return arrToText;
}

/* Simple answer (join() method parameter is separator):
return string.split("").reverse().join(""); */

// Do not edit below this line
module.exports = reverseString;
