const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];

const findElements = first
  .filter((el) => !second.includes(el))
  .concat(second.filter((el) => !first.includes(el)))
  .filter((el, ind, arr) => arr.indexOf(el) === ind)
  .sort();

console.log(findElements);
// Implement a logic that finds difference between "first" and "secord" lists
// and prints the result to the console:
// [1, 2, 4]
