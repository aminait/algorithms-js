// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// First solution
// function reverseInt(n) {
//   const arr = Math.abs(n).toString().split("");
//   return Math.sign(n) * parseInt(arr.reverse().join(""));
// }

function reverseInt(n) {
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

module.exports = reverseInt;
