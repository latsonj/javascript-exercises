const findTheOldest = function(array) {
  const date = new Date();
  const currentYear = date.getFullYear();

  let calculatedAges = array.map((person) => {
    if (!("yearOfDeath" in person)) {
      person.age = currentYear - person["yearOfBirth"];
      return person;
    } else {
      person.age = person["yearOfDeath"] - person["yearOfBirth"];
      return person;
    }
  })

  let sortedOldestToYoungest = calculatedAges.sort((personA, personB) => personB.age - personA.age);
  return sortedOldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
