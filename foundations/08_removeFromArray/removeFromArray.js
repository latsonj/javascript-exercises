<<<<<<< HEAD
<<<<<<< HEAD:04_removeFromArray/removeFromArray.js
const removeFromArray = function(array, ...values) {

  remove: for (let i = 0; i < values.length; i++) {
    let index = array.indexOf(values[i]);

    if (index < 0) {
      continue remove;
    }
    array.splice(index, 1);
  }
  return array;
=======
const removeFromArray = function() {
>>>>>>> upstream/main:foundations/08_removeFromArray/removeFromArray.js
=======
const removeFromArray = function() {
>>>>>>> upstream/main
};

// Do not edit below this line
module.exports = removeFromArray;
