// Problem 3
// Q: Add multiple values to an array using rest and spread operators.

let myArray = [1, 2, 3];
function addToArray(...args) {
  myArray = [...myArray, ...args];
}

addToArray(4, 5, 6);
console.log(myArray);  // [1, 2, 3, 4, 5, 6]