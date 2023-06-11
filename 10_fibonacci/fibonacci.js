const fibonacci = function(n) {
  let fibonacciArray = [1, 1];
  if (n < 0) {
    return "OOPS"
  }
  for (let i = 2; i < n; i++) {
    fibonacciArray.push((fibonacciArray[i-2]) + (fibonacciArray[i-1]))
  }
  return fibonacciArray[fibonacciArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
