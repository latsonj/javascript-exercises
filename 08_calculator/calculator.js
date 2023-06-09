const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce((prev, current) => prev + current);
  }
};

const multiply = function(...numbers) {
  return numbers.reduce((prev, current) => prev * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }
  if (array.length > 0) {
    return array.reduce((prev, current) => prev * current);
  } else {
    return 1;
  }
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
