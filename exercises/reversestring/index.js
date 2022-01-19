// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// First solution
// function reverse(str) {
//     const res = str.split('');
//     const reversed = res.map((char, i) => res[res.length - i - 1])
//     return reversed.join('').toString()
// }

// Optimized solution
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Simple solution
// function reverse(str) {
//   let reversedStr = "";

//   for (let char of str) {
//     reversedStr = char + reversedStr;
//   }

//   return reversedStr;
// }

// Same as Simple solution but uses array helper
function reverse(str) {
  debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
}

reverse("test");

module.exports = reverse;
